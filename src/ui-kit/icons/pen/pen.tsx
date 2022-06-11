import React, { FC } from 'react';
import { IPenIconProps } from "@ui-kit/icons/pen/types";


const PenIcon: FC<IPenIconProps> = ({ height, width }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 61.49" height={height || 15} width={width || 15}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1"
                d="M36,16.7a11.82,11.82,0,0,0,1.48-8.43,10.21,10.21,0,0,0-4.8-6.87c-5.05-3-11.8-1-15,4.42l-2.31,3.9L33.69,20.6Zm-4.22-3.43-9.09-5.4C24.51,5.47,27.63,4.6,30,6a4.91,4.91,0,0,1,2.29,3.35A6.4,6.4,0,0,1,31.78,13.27Z"/>
          <path className="cls-1"
                d="M1.51,53.93l1.57.78,15.27-8.25L31,25.19,12.62,14.3,0,35.58.08,51.41A3,3,0,0,0,1.51,53.93Zm13-32.32,9.17,5.44L14.51,42.47,5.39,47.4,5.34,37Z"/>
          <rect className="cls-1" y="56.16" width="64" height="5.33" rx="2.67" ry="2.67"/>
        </g>
      </g>
    </svg>
  );
};

export default PenIcon;
