/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadHorizontalBoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadHorizontalBoltIcon(
  props: DeviceIpadHorizontalBoltIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v6.5M9 17h4.5m5.5-1l-2 3h4l-2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadHorizontalBoltIcon;
/* prettier-ignore-end */
