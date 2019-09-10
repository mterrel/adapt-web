/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const { faChevronRight, faCloudUploadAlt, faCode } = require("@fortawesome/free-solid-svg-icons");
const { faReact } = require("@fortawesome/free-brands-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { CodeWindow, GridBlock, LogoShowcase } = require('adapt-web-components');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;


/*
 * Common components for the home page
 */


const SiteConfig = React.createContext({});

/**
 * @returns {{
 *   baseUrl: string;
 *   docsUrl: string;
 *   tagline: string;
 *   title: string;
 *   users: any[];
 * }}
 */
// @ts-ignore
const useSiteConfig = () => React.useContext(SiteConfig);

/**
 * @param {Object}   props
 * @param {any}      props.children
 * @param {string}   props.href
 * @param {string=}  props.target
 */
const Button = ({ href, target, children }) => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={href} target={target}>
      {children}
    </a>
  </div>
);

/**
 * @param {Object}   props
 * @param {'dark'|'highlight'|'light'=}  props.background
 * @param {any}      props.children
 * @param {string=}  props.id
 * @param {'twoColumn'|'threeColumn'|'fourColumn'=}  props.layout
 */
const Block = ({ background, children, id, layout }) => (
  <Container
    padding={['bottom', 'top']}
    id={id}
    background={background}>
    <GridBlock
      align="center"
      contents={children}
      layout={layout}
    />
  </Container>
);


/*
 * HomeSplash
 */


const ProjectTitle = () => (
  <h2 className="projectTitle">
    {useSiteConfig().tagline}
  </h2>
);

const ProjectDesc = () => (
  <div className="projectDescription">
    Create and deploy full-stack apps to any infrastructure using the power of React.
  </div>
);

const Logo = () => (
  <div className="logo">
    <img
      className="logo-icon"
      alt="Adapt Logo"
      src={`${useSiteConfig().baseUrl}img/logo_color.svg`}
    />
    <img
      className="logo-text"
      alt="Adapt"
      src={`${useSiteConfig().baseUrl}img/adapt_text.svg`}
    />
  </div>
);

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const HomeSplash = ({ language = '' }) => {
  const config = useSiteConfig();
  const { baseUrl, docsUrl } = config;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <SplashContainer>
      <Logo />
      <div className="intro">
        <ProjectTitle />
        <ProjectDesc />
        <PromoSection>
          <Button href={docUrl('getting_started')}>
            <span>Get Started</span>
            <FontAwesomeIcon className="buttonArrow" icon={faChevronRight} />
          </Button>
        </PromoSection>
      </div>
    </SplashContainer>
  );
}


/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const Features = ({ background }) => (
  <Block id="features" layout="threeColumn" background={background}>
    {[
      {
        title: 'Full-stack React',
        image: <FontAwesomeIcon icon={faReact} />,
        imageAlign: 'top',
        content:
`Build and deploy your entire app architecture using the power and simplicity
of [React's](https://reactjs.org) declarative component model and
[JSX](https://reactjs.org/docs/introducing-jsx.html).

Stop trying to stitch together infrastructure using
YAML and crippled template languages.
Adapt lets you connect your \`<ReactApp>\` UI to your \`<NodeService>\`
API and \`<Postgres>\` database.
`
      },
      {
        title: 'Deploy and Update with Ease',
        image: <FontAwesomeIcon icon={faCloudUploadAlt} />,
        imageAlign: 'top',
        content:
`Whether your app is a simple website or a complex microservice
architecture that integrates with multiple external services,
deploying is as simple as \`adapt run\`. 

When you make a change to your code or app description, \`adapt update\`
analyzes the changes and dependencies to only build and update the affected
components.
`
      },
      {
        title: 'Dev, Test, and Prod',
        image: <FontAwesomeIcon icon={faCode} />,
        imageAlign: 'top',
        content:
`Deploy to basic containers on your laptop. Set up elaborate end-to-end
testing with pre-populated databases in Kubernetes. Or deploy with full
redundancy and scaling using cloud services.

Describe your app once, then use Adapt style sheets to target as many
environments, clouds, and infrastructure technologies as you need.
`
      },
    ]}
  </Block>
);


const DeployExample = () => (
  <div className='deployExample'>
    <CodeWindow lang='bash' slim={false}>
{`# Install adapt
npm install -g @adpt/cli

# Create a new app from a starter template
adapt new hello-react-node-postgres ./myapp
cd myapp/deploy

# Deploy to Kubernetes using "k8s" style sheet
adapt run k8s
`}
    </CodeWindow>
    <div className="caption">

      Create a new microservice app from a template, then deploy it with a
      single command.
    </div>
  </div>
);

/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const DeployYourFirst = ({ background }) => (
  <Block id="deploy" background={background} >
    {[
      {
        title: 'Deploy your first app in seconds',
        content: [
`Create a complete app architecture from scratch using one of our starter
templates.

Or use Adapt's powerful declarative language to describe and deploy your
existing app.`,
        ],
        className: "blockLarge",
      },
      {
        content: <DeployExample />
      }
    ]}
  </Block>
);


const ExampleSpec = () => (
  <div className="exampleSpec">
    <CodeWindow lang='jsx' slim={true} title="index.tsx">
{`import Adapt from "@adpt/core";
import { NodeService, ReactApp } from "@adpt/cloud/nodejs";
import { Postgres } from "@adpt/cloud/postgres";

function MyApp() {
  const pg = Adapt.handle();

  return (
    <Adapt.Group>
      <ReactApp srcDir="../frontend" />
      <NodeService srcDir="../backend" connectTo={pg} />
      <Postgres handle={pg} />
    </Adapt.Group>
  );
}
`}
    </CodeWindow>
    <div className="caption">
      Adapt description to deploy a full-stack microservice app, including
      React UI, Node.js API service, and Postgres database.
    </div>
  </div>
);

/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const InfraMadeEasy = ({ background }) => (
  <Block id="components" background={background} >
    {[
      {
        content: <ExampleSpec />
      },
      {
        title: 'Infrastructure made easy',
        content:
`Define your infrastructure using simple, yet powerful components.

Choose components from the Adapt cloud library or easily
customize or create your own.`,
        className: "blockLarge",
      }
    ]}
  </Block>
);

const StylesExample = () => (
  <div className='stylesExample'>
    <CodeWindow lang='bash' slim={false}>
{`# "laptop" style sheet deploys directly to Docker
adapt run laptop

# "k8s" style sheet deploys to shared Kubernetes
adapt run k8s

# "aws-prod" style sheet deploys to AWS
adapt run aws-prod
`}
    </CodeWindow>
    <div className="caption">
      Map your app onto different technologies and environments with
      style sheets.
    </div>
  </div>
);

/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const Styles = ({ background }) => (
  <Block id="styles" background={background} >
    {[
      {
        title: `One app architecture. Multiple environments.`,
        content:
`Adapt style sheets let you run your app on your laptop's Docker for
development, on shared Kubernetes for testing, and AWS for production.
`,
        className: "blockLarge",
      },
      {
        content: <StylesExample />
      },
    ]}
  </Block>
);


const logoPath = "/img/tech_logos";
const techLogos = [
  {
    alt: 'Amazon Web Services',
    file: 'aws.svg',
  },
  {
    alt: 'React',
    file: 'react.png',
  },
  {
    alt: 'Docker',
    file: 'docker.png',
  },
  {
    alt: 'Kubernetes',
    file: 'kubernetes.svg',
  },
  {
    alt: 'AWS Lambda',
    file: 'lambda.svg',
    soon: true,
  },
  {
    alt: 'NodeJS',
    file: 'nodejs.svg',
  },
  {
    alt: 'TypeScript',
    file: 'typescript.svg',
  },
  {
    alt: 'Google Cloud',
    file: 'google_cloud.png',
    soon: true,
  },
  {
    alt: 'JavaScript',
    file: 'js.svg',
  },
  {
    alt: 'Golang',
    file: 'go.png',
    soon: true,
  },
];

/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const WorksWith = ({ background }) => (
  <Block id="works_with" background={background} >
    {[
      {
        content: <LogoShowcase logos={techLogos} pathPrefix={logoPath} />
      },
      {
        title: 'Works with all your favorite technologies',
        content:
`Adapt can deploy apps written in any language to your favorite cloud provider,
to your laptop, or to your own data center.`,
        className: "blockLarge",
      },
    ]}
  </Block>
);


const Index = ({ config, language = '' }) => (
  <SiteConfig.Provider value={config} >
    <div className="home">
      <HomeSplash language={language} />
      <div className="mainContainer">
        <Features background="highlight" />
        <DeployYourFirst />
        <InfraMadeEasy />
        <Styles background="dark" />
        <WorksWith />
      </div>
    </div>
  </SiteConfig.Provider>
);

module.exports = Index;
