import React, { SVGProps } from 'react';
import './CreatePost.scss';

const CreatePost = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="create-post-icon">
            <g clipPath="url(#clip0_34_397)">
                <path d="M59.1937 6.44955L56.8867 8.7443L51.2316 3.0892L53.5236 0.778097C54.5674 -0.265713 56.2598 -0.265713 57.3037 0.778097L59.1937 2.66949C60.2375 3.7133 60.2375 5.40575 59.1937 6.44955ZM22.2175 35.8697L24.1443 37.7979L53.2047 8.73749L55.0443 10.5785L24.5436 40.9225H19.0928V35.4705L49.4001 4.93426L51.2765 6.81066L22.2175 35.8697ZM2.74073 13.669V57.2747H46.3464V23.2077L49.0717 20.4824V57.2747V58.6373V60H2.74073H0.0153809V57.2747V10.9437H2.74073H39.533L36.8076 13.669H2.74073Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_34_397">
                    <rect width="60" height="60" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    );
};

export default CreatePost;
