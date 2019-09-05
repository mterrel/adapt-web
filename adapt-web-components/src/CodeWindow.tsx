// tslint:disable variable-name

import React from "react";

import classNames from "classnames";
// tslint:disable-next-line: no-var-requires no-submodule-imports
const MarkdownBlock = require("docusaurus/lib/core/MarkdownBlock");

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
