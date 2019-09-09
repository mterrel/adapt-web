/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// tslint:disable variable-name

import classNames from "classnames";
import React from "react";

let Remarkable: any;

export interface GridBlockProps {
    align: "left" | "center" | "right";
    className?: string;
    contents: ContentBlock[];
    contentWrapper: React.ComponentType<{ className?: string }>;
    layout: "twoColumn" | "threeColumn" | "fourColumn";
}

export interface ContentBlock {
    title?: string;
    className?: string;
    content?: React.ElementType | React.ElementType[];
    /** Path of the image */
    image?: string | React.ElementType;
    imageAlt?: string;
    imageAlign?: "top" | "left" | "bottom" | "right";
    imageLink?: string;
}

export const GridBlock = (props: GridBlockProps) => {
    // Load this late to avoid circular require dependencies through siteConfig.js
    // and renderMarkdown.js
    // tslint:disable-next-line: no-var-requires no-submodule-imports
    if (!Remarkable) Remarkable = require("docusaurus/lib/core/Remarkable");

    let key = 0;
    const getKey = () => (++key).toString();

    // The Remarkable component doesn't propagate any props (like className)
    // through, but it does allow specifying a wrapper container so we can
    // propagate them ourselves.
    function ContentTransform(xformProps: any) {
        const ContentWrapper = (wrapperProps: any) => (
            <div {...xformProps} {...wrapperProps} />
        );
        return <Remarkable container={ContentWrapper} {...xformProps} />;
    }

    function renderBlock(origBlock: ContentBlock) {
        const blockDefaults = {
            imageAlign: "left",
        };

        const block = {
            ...blockDefaults,
            ...origBlock,
        };

        const blockClasses = classNames("blockElement",
            props.className, block.className, {
                alignCenter: props.align === "center",
                alignRight: props.align === "right",
                fourByGridBlock: props.layout === "fourColumn",
                imageAlignSide:
                    block.image &&
                    (block.imageAlign === "left" || block.imageAlign === "right"),
                imageAlignTop: block.image && block.imageAlign === "top",
                imageAlignRight: block.image && block.imageAlign === "right",
                imageAlignBottom: block.image && block.imageAlign === "bottom",
                imageAlignLeft: block.image && block.imageAlign === "left",
                threeByGridBlock: props.layout === "threeColumn",
                twoByGridBlock: props.layout === "twoColumn",
            });

        const topLeftImage =
            (block.imageAlign === "top" || block.imageAlign === "left") &&
            renderBlockImage(block.image, block.imageLink, block.imageAlt);

        const bottomRightImage =
            (block.imageAlign === "bottom" || block.imageAlign === "right") &&
            renderBlockImage(block.image, block.imageLink, block.imageAlt);

        return (
            <div className={blockClasses} key={block.title || getKey()} >
                {topLeftImage}
                <div className="blockContent">
                    {renderBlockTitle(block.title)}
                    <ContentTransform className="blockContentItem">
                        {block.content}
                    </ContentTransform>
                </div>
                {bottomRightImage}
            </div>
        );
    }

    function imageElement(image: string | React.ElementType,
        imageAlt: string | undefined) {

        return typeof image === "string" ?
            <img src={image} alt={imageAlt} /> :
            image;
    }

    function renderBlockImage(image: string | React.ElementType | undefined,
        imageLink: string | undefined, imageAlt: string | undefined) {
        if (!image) {
            return null;
        }

        return (
            <div className="blockImage">
                {imageLink ? (
                    <a href={imageLink}>{imageElement(image, imageAlt)}</a>
                ) : (
                    imageElement(image, imageAlt)
                )}
            </div>
        );
    }

    function renderBlockTitle(title: string | undefined) {
        if (!title) {
            return null;
        }

        return (
            <h2>
                <ContentTransform>{title}</ContentTransform>
            </h2>
        );
    }

    return (
        <div className="gridBlock">
            {props.contents.map(renderBlock)}
        </div>
    );
};

GridBlock.defaultProps = {
    align: "left",
    contents: [],
    contentWrapper: "div",
    layout: "twoColumn",
};
