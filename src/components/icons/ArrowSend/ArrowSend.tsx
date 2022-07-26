import React, { SVGProps } from 'react';
import './ArrowSend.scss';

const ArrowSend = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-send-icon">
            <path
                d="M0.0125 22.5L26.25 11.25L0.0125 0L0 8.75L18.75 11.25L0 13.75L0.0125 22.5Z"
                fill={fill}
            />
        </svg>
    );
};

export default ArrowSend;
