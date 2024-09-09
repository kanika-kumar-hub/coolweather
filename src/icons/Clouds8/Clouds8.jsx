/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clouds8 = ({ className }) => {
  return (
    <svg
      className={`clouds-8 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 37 22"
      width="37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_12_501)">
        <g className="g" filter="url(#filter1_i_12_501)">
          <path
            className="path"
            d="M32.2545 11.0332C32.3477 10.5044 32.3962 9.9604 32.3962 9.40515C32.3962 4.21083 28.1462 0 22.9034 0C19.0059 0 15.6569 2.32719 14.195 5.65557C13.0106 4.64246 11.4737 4.03078 9.79427 4.03078C6.04945 4.03078 3.01367 7.07194 3.01367 10.8234C3.01367 11.0323 3.02309 11.239 3.04151 11.4431C1.24032 12.3172 7.54446e-05 14.1513 7.54446e-05 16.2724C7.54446e-05 19.2406 2.4287 21.6468 5.42455 21.6468H31.0401C34.036 21.6468 36.4646 19.2406 36.4646 16.2724C36.4646 13.7179 34.6657 11.5796 32.2545 11.0332Z"
            fill="url(#paint0_linear_12_501)"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="75.6468"
          id="filter0_b_12_501"
          width="90.4646"
          x="-27"
          y="-27"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_12_501"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_12_501"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="31.6468"
          id="filter1_i_12_501"
          width="36.4646"
          x="0"
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
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_12_501" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_12_501"
          x1="2.31937"
          x2="39.106"
          y1="19.714"
          y2="-7.79542"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.58" />
        </linearGradient>
      </defs>
    </svg>
  );
};
