/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { GitHubLink, GitHubStar, GitterButton, Twitter } = require('adapt-web-components');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function BlogLink({ config }) {
  if (!config) return null;

  return <a href={`${config.baseUrl}blog`}>Adapt Blog</a>;
}

const Credits = () => (
  <section className="credits">
    <div />
    <div className="madeWith">
      <span>Made with </span>
      <FontAwesomeIcon className="heart" icon={faHeart} />
      <span> in&nbsp;Denver</span>
    </div>
    <div className="unbounded">
      <div className="copyright">
        Copyright © {new Date().getFullYear()}
        <br/>
        <a href="https://unbounded.systems">Unbounded&nbsp;Systems</a>
      </div>
      <div className="logo">
        <a href="https://unbounded.systems">
          <img alt="Unbounded Systems Logo" src="/img/unbounded_white.svg" />
        </a>
      </div>
    </div>
  </section>
);

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting_started')}>
              Getting Started
            </a>
            <a href={this.docUrl('tutorial_concepts')}>
              Concepts Tutorial
            </a>
            <a href={this.docUrl('api/core/overview')}>
              Core API Reference
            </a>
            <a href={this.docUrl('api/cloud/overview')}>
              Cloud API Reference
            </a>
          </div>
          <div />
          <div>
            <h5>Get in touch</h5>

            <BlogLink config={this.props.config} />
            <GitHubLink config={this.props.config} />
            <GitHubStar config={this.props.config} />
            <GitterButton config={this.props.config} />
            <Twitter config={this.props.config} />
          </div>
        </section>

        <Credits />
      </footer>
    );
  }
}

module.exports = Footer;
