import React, { SVGProps } from 'react';
import './VolumeOn.scss';

const VolumeOn = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg className="volume-on-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 0 0 0-9.9l1.41-1.41a8.97 8.97 0 0 1 0 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z"
                fill={fill}
            />
        </svg>
    );
};

export default VolumeOn;
