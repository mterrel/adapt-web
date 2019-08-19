/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const {config } = props;
  const latestVersion = versions[0];
  const previous = versions.slice(1);
  const { repoUrl } = config;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Adapt Releases</h1>
          </header>
          <h3 id="latest">Current version</h3>
          <table className="versions">
            <tbody>
              <VersionRow
                config={config}
                version={latestVersion}
                language={props.language}
              />
            </tbody>
          </table>

          {previous.length === 0 ? null :
            <div>
              <h3 id="previous">Previous versions</h3>
              <table className="versions">
                <tbody>
                  {previous.map(v => <VersionRow key={v} config={config} version={v} language={props.language} />)}
                </tbody>
              </table>
              <p>
                You can find more past versions of this project on{' '}
                <a href={repoUrl}>GitHub</a>.
              </p>
            </div>
          }

          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <VersionRow
                config={config}
                version="next"
                description="master (next)"
                source={config.repoUrl}
                language={props.language}
              />
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

function VersionRow(props) {
  const { config } = props;
  const prefix = props.version === versions[0] ? '' : props.version + '/';
  return (
    <tr>
      <th>{props.description || props.version}</th>
      <td>
        <a
          href={`${config.baseUrl}${config.docsUrl}/${
            props.language ? props.language + '/' : ''
          }${prefix}getting_started`}>
          Documentation
        </a>
      </td>
      {props.source ?
        <td>
          <a href={props.source}>Source Code</a>
        </td>
        : null
      }
    </tr>
  );
}

module.exports = Versions;
