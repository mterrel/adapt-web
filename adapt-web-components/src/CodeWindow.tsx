// tslint:disable variable-name

import React from "react";

import classNames from "classnames";
let MarkdownBlock: any;

const codeBlock = (code: string, lang = "") =>
    "```" + `${lang}\n${code.trimEnd()}\n` + "```";

export interface CodeWindowProps {
    children: string;
    lang: string;
    slim: boolean;
    title: string;
}

export const CodeWindow = (props: CodeWindowProps) => {
    const { children, lang, slim, title } = props;

    // Load this late to avoid circular require dependencies through siteConfig.js
    // and renderMarkdown.js
    // tslint:disable-next-line: no-var-requires no-submodule-imports
    if (!MarkdownBlock) MarkdownBlock = require("docusaurus/lib/core/MarkdownBlock");

    return (
        <div className="term center-block term-background-codeblock">
            <div className="term-header">
                <button className="term-header-button term-header-button-close"></button>
                <button className="term-header-button term-header-button-minimize"></button>
                <button className="term-header-button term-header-button-expand"></button>
                <div className="term-header-title">
                    <span>{title}</span>
                </div>
            </div>
            <div className={classNames("term-content", { slim })}>
                <MarkdownBlock>{codeBlock(children, lang)}</MarkdownBlock>
            </div>
        </div>
    );
};

CodeWindow.defaultProps = {
    lang: "",
    slim: false,
    title: "",
};
