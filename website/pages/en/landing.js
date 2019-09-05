/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { GridBlock, CodeWindow }= require('adapt-web-components');
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;

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

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {useSiteConfig().tagline}
  </h2>
);

const ProjectDesc = () => (
  <div className="projectDescription">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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

/**
 * @param {Object}   props
 * @param {any}      props.children
 * @param {string}   props.href
 * @param {string=}  props.target
 */
const Button = ({ href, target, children })=> (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={href} target={target}>
      {children}
    </a>
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
          <Button href="#try">Get Started &gt;</Button>
        </PromoSection>
      </div>
    </SplashContainer>
  );
}

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


const ExampleSpec = () => (
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
);

const DeployExample = () => (
  <CodeWindow lang='bash' slim={false}>
{`# Install adapt
npm install -g @adpt/cli

# Create a new app from a starter template
adapt new hello-react-node-postgres ./myapp

# Deploy to Kubernetes
cd myapp/deploy
adapt run k8s
`}
  </CodeWindow>
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

Or easily deploy your existing app using Adapt.`,
        ],
        className: "blockLarge",
      },
      {
        content: <DeployExample />
      }
    ]}
  </Block>
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
`Define your infrastructure using React-like components.

Choose components from the Adapt cloud library or easily
customize or create your own.`,
        className: "blockLarge",
      }
    ]}
  </Block>
)

/**
 * @param {Object}    props
 * @param {'light'|'dark'|'highlight'=}    props.background
 */
const Features = ({ background }) => (
  <Block layout="threeColumn" background={background}>
    {[
      {
        title: 'Infrastructure as Code',
        image: `${useSiteConfig().baseUrl}img/undraw_react.svg`,
        imageAlign: 'top',
        content: 
`No, really. **ACTUAL** code.

Just like React, Adapt specs are written in JavaScript, using
easy-to-understand [TSX or JSX](https://reactjs.org/docs/introducing-jsx.html)
syntax.
But instead of using components like \`<button>\` and \`<div>\`, Adapt
uses components like \`<Container>\` and \`<EC2Instance>\`.
`
      },
      {
        title: 'Declarative',
        image: `${useSiteConfig().baseUrl}img/undraw_react.svg`,
        imageAlign: 'top',
        content:
`Adapt specifications are declarative.
You describe the state you want your app or your infrastructure to be in,
not how it should get there.
Adapt takes care of computing the minimal set of changes required to get
your infrastructure to the desired state.
`
      },
      {
        title: 'Component-based',
        image: `${useSiteConfig().baseUrl}img/undraw_react.svg`,
        imageAlign: 'top',
        content:
`Easily build encapsulated components that manage parts of your app or
infrastructure or use components from existing libraries.
Then compose those components to build anything from a simple end-to-end
app test case or an entire data center.
`
      },
    ]}
  </Block>
);

const Showcase = ({ language }) => {
  const { baseUrl, title, users } = useSiteConfig();
  if ((users || []).length === 0) {
    return null;
  }

  const showcase = users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html')}>
          More {title} Users
        </a>
      </div>
    </div>
  );
};

const Index = ({ config, language = '' }) => (
  <SiteConfig.Provider value={config} >
    <div>
      <HomeSplash language={language} />
      <div className="mainContainer">
        <Features background="highlight" />
        <DeployYourFirst />
        <InfraMadeEasy background="dark" />
      </div>
    </div>
  </SiteConfig.Provider>
);

module.exports = Index;
