all: test
.PHONY: all

NODE_SUBDIRS := adapt-web-components website
PKG_JSONS := package.json $(addsuffix /package.json,$(NODE_SUBDIRS))

# Don't depend on the timestamp of the actual node_modules directory.
# Depend on the timestamp of a .install-success file that says when
# yarn install actually last successfully completed
node_modules/.install-success: yarn.lock $(PKG_JSONS)
	yarn
	touch $@

AWC_SRC_FILES:=$(shell find adapt-web-components \( -path adapt-web-components/dist -o -path adapt-web-components/node_modules -o -path adapt-web-components/.rpt2_cache \) -prune -o -type f -print)

node_modules/.awc-build-success: $(AWC_SRC_FILES) node_modules/.install-success
	cd adapt-web-components && yarn run build
	touch $@

awc-build: node_modules/.awc-build-success
.PHONY: awc-build

DOCS_SRC_FILES:=$(shell find docs/ -type f)
WEBSITE_SRC_FILES:=$(shell find website \( -path website/build -o -path website/node_modules \) -prune -o -type f -print)

node_modules/.website-build-success: $(WEBSITE_SRC_FILES) $(DOCS_SRC_FILES) node_modules/.awc-build-success node_modules/.install-success
	cd website && yarn run build
	touch $@

website-build: node_modules/.website-build-success
.PHONY: website-build

build: awc-build website-build
.PHONY: build

test: build
	cd website && yarn run test
.PHONY: test

clean:
	rm -rf node_modules $(addsuffix /node_modules,$(NODE_SUBDIRS)) \
		adapt-web-components/dist website/build
.PHONY: clean

ifdef PROJ_DIRS_ABS
ADAPT_DOCS_UPDATED:=$(addsuffix /dist/.docs_success,$(PROJ_DIRS_ABS))
endif
ifdef REPO_ROOT
ADAPT_DOCS_FILES:=$(shell find $(REPO_ROOT)/docs/ -type f)
endif

node_modules/.update-from-adapt-success: $(ADAPT_DOCS_FILES) $(ADAPT_DOCS_UPDATED)
	@if [ -z "$(REPO_ROOT)" ]; then \
		echo Error: REPO_ROOT not set in web Makefile. ; \
		false ; \
	fi
	rm -rf docs/
	mkdir docs
	cp -R $(REPO_ROOT)/*/build/docs/* docs/
	cp -R $(REPO_ROOT)/docs/* docs/
	mkdir -p node_modules
	touch $@

update-from-adapt: node_modules/.update-from-adapt-success
.PHONY: update-from-adapt

push-docs-master: test
	@if [ -z "$(REPO_ROOT)" ]; then \
		echo Error: REPO_ROOT not set in web Makefile. ; \
		false ; \
	fi
	./push-docs.sh $(REPO_ROOT) master
.PHONY: push-docs-master

preview: node_modules/.install-success
	printf "\n\nRunning Docusaurus server on http://localhost:3000\n\n"
	docker run --rm -it -p35729:35729 -p3000:3000 --name docs -v $$(pwd):/app -w /app unboundedsystems/node-testimg:v2.0.1 yarn start
.PHONY: preview
