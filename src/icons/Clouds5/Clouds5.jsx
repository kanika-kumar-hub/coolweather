/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clouds5 = ({ className }) => {
  return (
    <svg
      className={`clouds-5 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 35 20"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_12_367)">
        <g className="g" filter="url(#filter1_i_12_367)">
          <path
            className="path"
            d="M30.2087 10.1437C30.2931 9.66441 30.3372 9.17136 30.3372 8.66813C30.3372 3.96037 26.4852 0.143982 21.7335 0.143982C18.2011 0.143982 15.1659 2.25317 13.8409 5.26978C12.7674 4.35157 11.3745 3.79719 9.85237 3.79719C6.45834 3.79719 3.70694 6.55347 3.70694 9.95352C3.70694 10.1428 3.71547 10.3302 3.73217 10.5152C2.0997 11.3074 0.975632 12.9697 0.975632 14.8921C0.975632 17.5823 3.17676 19.763 5.89198 19.763H29.1081C31.8233 19.763 34.0244 17.5823 34.0244 14.8921C34.0244 12.5769 32.394 10.6389 30.2087 10.1437Z"
            fill="url(#paint0_linear_12_367)"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="73.6191"
          id="filter0_b_12_367"
          width="87.0488"
          x="-26.0244"
          y="-26.856"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_12_367"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_12_367"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="29.6191"
          id="filter1_i_12_367"
          width="33.0488"
          x="0.975586"
          y="0.143982"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="11" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="5" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_12_367" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_12_367"
          x1="3.07767"
          x2="36.4184"
          y1="18.0113"
          y2="-6.92122"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.58" />
        </linearGradient>
      </defs>
    </svg>
  );
};
