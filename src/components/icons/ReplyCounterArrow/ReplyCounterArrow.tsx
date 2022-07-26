import React, { SVGProps } from 'react';
import './ReplyCounterArrow.scss';

const ReplyCounterArrow = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="reply-counter-icon">
            <path
                d="M20.3907 11.544C18.247 9.40016 15.5541 7.92963 12.6033 7.29149C10.7352 6.88741 8.82242 6.82883 6.95282 7.10554V2.32837L0 9.26449L6.95282 16.2339V9.73745C11.1305 9.00214 15.5052 10.3295 18.5552 13.3795C21.0372 15.8615 22.4041 19.1616 22.4041 22.6717H24.9999C25 18.4681 23.3631 14.5163 20.3907 11.544Z"
                fill={fill}
            />
        </svg>
    );
};

export default ReplyCounterArrow;
