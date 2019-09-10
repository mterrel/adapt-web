// tslint:disable variable-name

import classNames from "classnames";
import React from "react";
// tslint:disable-next-line: no-var-requires
const Safe = require("react-safe").default;

const slickInit = `
  $(document).ready(function() {
    $('.logo-showcase').slick({
      autoplay: true,
      accessibility: false,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToShow: 3,
      speed: 2000,
      touchMove: false,
      autoplaySpeed: 0,
      cssEase: 'linear',
      respondTo: 'slider',
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  });
`;

export interface Logo {
    alt: string;
    file: string;
    soon?: boolean;
}

export interface LogoShowcaseProps {
    logos: Logo[];
    pathPrefix: string;
}

export const LogoShowcase = (props: LogoShowcaseProps) => {
    let prefix = props.pathPrefix;
    if (prefix) prefix += "/";

    return (
        <div className="logo-showcase-wrapper">
            <div className="logo-showcase center-block">
                {props.logos.map((logo) =>
                    <div
                      className={classNames("logo-slide", { comingSoon: logo.soon })}
                      key={logo.file}
                    >
                        <img src={prefix + logo.file} />
                    </div>
                )}
            </div>
            <Safe.script type="text/javascript">{slickInit}</Safe.script>
        </div>
    );
};

LogoShowcase.defaultProps = {
    pathPrefix: "",
};
