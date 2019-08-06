import React from "react";
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
}

export function GitHubStar(props: GitHubStarProps) {
  let url = "";
  if (props.large) url += "&size=large";
  const size = props.large ?
    { width: "75px", height: "30px" } :
    { width: "50px", height: "20px" };
  const src = `https://ghbtns.com/github-btn.html?` +
    `user=${props.config.organizationName}&repo=${props.config.projectName}` +
    `&type=star${url}`;
  return <iframe className={props.className} src={src} scrolling="0" { ...size } />;
}
GitHubStar.defaultProps = {
  large: false,
};

export function GitHubLink(props: WithCommonProps) {
  return <a className={props.className} href={props.config.repoUrl}>GitHub</a>;
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
