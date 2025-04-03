/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDown2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDown2Icon(props: ChevronDown2IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.398 15.663a.562.562 0 01-.795 0L5.868 9.93a.562.562 0 010-.796l.265-.265c.22-.22.576-.22.796 0L12 13.94l5.071-5.072c.22-.22.576-.22.796 0l.265.265c.22.22.22.576 0 .796l-5.735 5.734z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDown2Icon;
/* prettier-ignore-end */
