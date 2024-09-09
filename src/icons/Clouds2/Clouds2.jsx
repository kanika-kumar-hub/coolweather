/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clouds2 = ({ className }) => {
  return (
    <svg
      className={`clouds-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 35 20"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_12_353)">
        <g className="g" filter="url(#filter1_i_12_353)">
          <path
            className="path"
            d="M30.2087 9.99972C30.2931 9.52043 30.3372 9.02738 30.3372 8.52415C30.3372 3.81639 26.4852 0 21.7335 0C18.2011 0 15.1659 2.10919 13.8409 5.1258C12.7674 4.20759 11.3745 3.65321 9.85237 3.65321C6.45834 3.65321 3.70694 6.40949 3.70694 9.80953C3.70694 9.99886 3.71547 10.1862 3.73217 10.3712C2.0997 11.1634 0.975632 12.8257 0.975632 14.7481C0.975632 17.4383 3.17676 19.6191 5.89198 19.6191H29.1081C31.8233 19.6191 34.0244 17.4383 34.0244 14.7481C34.0244 12.4329 32.394 10.4949 30.2087 9.99972Z"
            fill="url(#paint0_linear_12_353)"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="73.6191"
          id="filter0_b_12_353"
          width="87.0488"
          x="-26.0244"
          y="-27"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_12_353"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_12_353"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="29.6191"
          id="filter1_i_12_353"
          width="33.0488"
          x="0.975586"
          y="0"
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
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_12_353" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_12_353"
          x1="3.07767"
          x2="36.4184"
          y1="17.8674"
          y2="-7.0652"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.58" />
        </linearGradient>
      </defs>
    </svg>
  );
};
