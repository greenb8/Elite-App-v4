/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdCircleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdCircleFilledIcon(props: AdCircleFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.43 0-9.848-4.327-9.996-9.72L2 12l.004-.28C2.152 6.327 6.57 2 12 2zM8.5 8a2.5 2.5 0 00-2.495 2.336L6 10.5V15l.007.117a1 1 0 001.986 0L8 15v-1h1v1l.007.117a1 1 0 001.986 0L11 15v-4.5l-.005-.164A2.5 2.5 0 008.5 8zM15 8h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3v-2a3 3 0 00-3-3zm0 2a1 1 0 011 1v2a1 1 0 01-.883.993L15 14v-4zm-6.5 0a.5.5 0 01.492.41L9 10.5V12H8v-1.5l.008-.09A.5.5 0 018.5 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AdCircleFilledIcon;
/* prettier-ignore-end */
