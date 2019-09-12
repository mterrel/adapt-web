/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const classNames = require('classnames');
const { Container } = require('../../core/CompLibrary.js');
const { GitHubStar, GitterLink } = require('adapt-web-components');

function Columns(props) {
  const cols = props.columns;
  if (!Array.isArray(cols) || cols.length !== 3) {
    throw new Error(`Proprty 'columns' must be an array of size 3`);
  }
  const blockClasses = classNames('blockElement', props.className, {
    threeByGridBlock: true,
  })

  return (
    <div className="gridBlock">
      {cols.map(renderCol)}
    </div>
  )

  function renderTitle(title) {
    if (!title) return null;
    return <h2>{title}</h2>;
  }

  function renderCol(col) {
    return (
      <div className={blockClasses} key={col.title}>
        <div className="blockContent">
          {renderTitle(col.title)}
          {col.content}
        </div>
      </div>
    );
  }
}

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl, issueUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docLink = (text, doc) => (
    <a href={`${baseUrl}${docsPart}${langPart}${doc}`}>{text}</a>
  );

  const helpColumns = [
    {
      title: 'Browse the Docs',
      content: (
        <div>
          Find what you're looking for in our documentation and tutorials:
          <ul>
            <li>{docLink('Get started', 'getting_started')} with Adapt</li>
            <li>Learn about Adapt concepts in
              the {docLink('Concepts Tutorial', 'tutorial_concepts')}</li>
            <li>Look at the complete {docLink('Core', 'api/core/overview')} or
              {' '}
              {docLink('Cloud', 'api/cloud/overview')} API References</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Ask Questions',
      content: (
        <div>
          Let us know if you haven't found the answers you're looking for!
          <ul>
            <li>Chat with us on the <GitterLink config={siteConfig} /></li>
            <li><a href={issueUrl}>File an issue</a> on GitHub</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Join the Community',
      content: (
        <div>
          Get involved and keep up with the latest Adapt news:
          <ul>
            <li>Give Adapt a <GitHubStar config={siteConfig} className="inline-button" /> on GitHub</li>
            <li>Follow the <a href="https://unbounded.systems/blog">Unbounded Blog</a></li>
          </ul>
        </div>
      )
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <Columns columns={helpColumns} />
        </div>
      </Container>
    </div>
  );
}

Help.title = "Getting Help";
Help.description = "Getting help with Adapt";

module.exports = Help;
