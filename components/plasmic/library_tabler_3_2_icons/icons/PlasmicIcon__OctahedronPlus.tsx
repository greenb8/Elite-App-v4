/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OctahedronPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OctahedronPlusIcon(props: OctahedronPlusIconProps) {
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
          "M21.498 12.911l.206-.208a.983.983 0 000-1.407l-8.845-8.948a1.233 1.233 0 00-1.718 0l-8.845 8.949a.984.984 0 000 1.407l8.845 8.949a1.234 1.234 0 001.718-.001l.08-.081"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61l.801-.238c.195-.07.294-.156.296-.243M12 2.12v19.76M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OctahedronPlusIcon;
/* prettier-ignore-end */
