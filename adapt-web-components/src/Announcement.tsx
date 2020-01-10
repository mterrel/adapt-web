// tslint:disable variable-name

import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

// tslint:disable-next-line: no-var-requires
const Safe = require("react-safe").default;

export interface CloseProps {
    className?: string;
}
export interface AnnouncementProps {
    /**
     * A string that uniquely identifies this announcement. This string is
     * stored in a browser cookie when the user closes this announcement to
     * indicate that the announcement should not be shown on later visits.
     */
    announceId: string;
    content: React.ReactChild;
}

export const CloseButton = (props: CloseProps) => (
    <FontAwesomeIcon
        className={classNames(props.className, "closeButton")}
        icon={faTimes}
    />
);

// Characters other than this cause issues either in the HTML id or in CSS rules
// that are generated using the announceId.
const validId = /^[-A-Za-z0-9_]+$/;

export const Announcement = (props: AnnouncementProps) => {
    if (!validId.test(props.announceId)) {
        throw new Error(`Invalid announceId '${props.announceId}'. Valid characters are: -A-Za-z0-9_`);
    }
    const wrapId = `announcementWrapper-${props.announceId}`;
    const init = `announcementInit('${props.announceId}')`;
    return (
        <div>
            <div id={wrapId} className="announcementWrapper">
                <div className="announcement">
                    {props.content}
                </div>
                <CloseButton />
            </div>
            <Safe.script type="text/javascript">{init}</Safe.script>
        </div>
    );
};
