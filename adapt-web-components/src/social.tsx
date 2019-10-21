import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export interface SiteConfig {
  organizationName: string;
  projectName: string;
  repoUrl: string;
  gitterUrl: string;
  twitterUsername?: string;
  //[key: string]: any;
}

export interface WithSiteConfig {
  config: SiteConfig;
}

export interface WithCommonProps extends WithSiteConfig {
  className?: string;
}

export interface GitHubStarProps extends WithCommonProps {
  large: boolean;
  count: boolean;
}

//Note this requires including this <script async defer src="https://buttons.github.io/buttons.js"></script>
export function GitHubStar(props: GitHubStarProps) {
  const config: any = {};
  config["data-icon"] = "octicon-star";
  if (props.large) config["data-size"] = "large";
  if (props.count) config["data-show-count"] = "true";
  config["aria-label"] = `Star ${props.config.organizationName}/${props.config.projectName} on GitHub`;
  config.className = classNames("github-button");
  
  return <div className={classNames(props.className, "githubStar")}>
    <a href={props.config.repoUrl} {...config}>Star</a>
  </div>;
}
GitHubStar.defaultProps = {
  large: false,
  count: false
};

export interface GitHubLinkProps extends WithCommonProps {
  content: "logo" | React.ReactNode;
}

export function GitHubLink(props: GitHubLinkProps) {
  const { className, ...rest } = props;
  const content =
    props.content === "logo" ? <GitHubLogo {...rest} /> :
    props.content;
  return (
    <a
      className={classNames(className, "githubLink")}
      href={props.config.repoUrl}>
      {content}
    </a>
  );
}
GitHubLink.defaultProps = {
  content: "GitHub",
};

export function GitHubLogo(props: WithCommonProps) {
  return <FontAwesomeIcon
    className={classNames(props.className, "githubLogo")}
    icon={faGithub}
  />;
}

export function GitterButton(props: WithCommonProps) {
  if (!props.config.gitterUrl) return null;
  return (
    <div className={props.className} >
      <a href={props.config.gitterUrl}>
      <img
        src="https://badges.gitter.im/UnboundedSystems/Adapt.svg"
        alt="Chat on Gitter"
        />
      </a>
    </div>
  );
}

export interface GitterLinkProps extends WithCommonProps {
  text: string;
}

export function GitterLink(props: GitterLinkProps) {
  if (!props.config.gitterUrl) return null;
  return <a className={props.className} href={props.config.gitterUrl}>{props.text}</a>;
}
GitterLink.defaultProps = {
    text: "Adapt Gitter channel",
};

export function Twitter(props: WithCommonProps) {
  if (!props.config.twitterUsername) return null;
  const classes = classNames("social", props.className);
  return (
    <div className={classes}>
      <a
        href={`https://twitter.com/${props.config.twitterUsername}`}
        className="twitter-follow-button">
        Follow @{props.config.twitterUsername}
      </a>
    </div>
  );
}
