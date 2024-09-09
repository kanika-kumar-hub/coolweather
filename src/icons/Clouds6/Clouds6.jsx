/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clouds6 = ({ className }) => {
  return (
    <svg
      className={`clouds-6 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 32 20"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_12_388)">
        <g className="g" filter="url(#filter1_i_12_388)">
          <path
            className="path"
            d="M27.9048 10.4253C27.9841 9.97122 28.0255 9.50414 28.0255 9.02741C28.0255 4.56763 24.4062 0.952271 19.9417 0.952271C16.6226 0.952271 13.7708 2.95036 12.5258 5.80807C11.5172 4.93823 10.2085 4.41305 8.77828 4.41305C5.58929 4.41305 3.00411 7.02414 3.00411 10.2451C3.00411 10.4244 3.01213 10.6019 3.02782 10.7771C1.49397 11.5276 0.437816 13.1024 0.437816 14.9235C0.437816 17.472 2.50596 19.5379 5.05715 19.5379H26.8707C29.4218 19.5379 31.49 17.472 31.49 14.9235C31.49 12.7303 29.9581 10.8944 27.9048 10.4253Z"
            fill="url(#paint0_linear_12_388)"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="72.5856"
          id="filter0_b_12_388"
          width="85.0522"
          x="-26.5623"
          y="-26.0477"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_12_388"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_12_388"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="28.5856"
          id="filter1_i_12_388"
          width="31.0522"
          x="0.437744"
          y="0.952271"
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
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_12_388" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_12_388"
          x1="2.41287"
          x2="33.9233"
          y1="17.8785"
          y2="-5.49282"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.58" />
        </linearGradient>
      </defs>
    </svg>
  );
};
