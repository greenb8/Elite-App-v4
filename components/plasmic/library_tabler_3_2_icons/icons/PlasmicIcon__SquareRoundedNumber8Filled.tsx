/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedNumber8FilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedNumber8FilledIcon(
  props: SquareRoundedNumber8FilledIconProps
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
          "M12 2l.642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017c.21-.003.424-.005.642-.005zm1 5h-2l-.15.005a2 2 0 00-1.844 1.838L9 9v2l.005.15c.018.236.077.46.17.667l.075.152.018.03-.018.032c-.133.24-.218.509-.243.795L9 13v2l.005.15a2 2 0 001.838 1.844L11 17h2l.15-.005a2 2 0 001.844-1.838L15 15v-2l-.005-.15a1.99 1.99 0 00-.17-.667l-.075-.152-.019-.032.02-.03c.135-.245.218-.516.242-.795L15 11V9l-.005-.15a2 2 0 00-1.838-1.844L13 7zm0 6v2h-2v-2h2zm0-4v2h-2V9h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedNumber8FilledIcon;
/* prettier-ignore-end */
