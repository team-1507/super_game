import React, { SVGProps } from 'react';
import './CloseButton.scss';

const CloseButton = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="close-buton-icon">
            <path
                d="M15 0C6.72897 0 0 6.72897 0 15C0 23.2709 6.72897 29.9999 15 29.9999C18.8956 29.9999 22.5871 28.5134 25.3945 25.8143C25.6376 25.5807 25.6452 25.1942 25.4115 24.9512C25.178 24.7082 24.7916 24.7005 24.5484 24.9342C21.9696 27.4135 18.5786 28.7789 15.0001 28.7789C7.40225 28.779 1.22099 22.5978 1.22099 15C1.22099 7.40214 7.40225 1.22099 15 1.22099C22.5977 1.22099 28.7789 7.40225 28.7789 15C28.7789 16.7136 28.4684 18.3854 27.8559 19.9689C27.7344 20.2834 27.8906 20.6368 28.2051 20.7585C28.5198 20.8799 28.8731 20.7238 28.9948 20.4093C29.6618 18.6848 30 16.8648 30 14.9998C30 6.72897 23.271 0 15 0Z"
                fill={fill}
            />
            <path
                d="M17.0551 16.2935C16.814 16.0575 16.4275 16.0618 16.1918 16.3026C15.9559 16.5436 15.9601 16.9301 16.201 17.166L21.0072 21.8705C21.126 21.9868 21.2802 22.0446 21.4342 22.0446C21.5926 22.0446 21.751 21.9833 21.8705 21.8612C22.1064 21.6203 22.1022 21.2337 21.8614 20.9979L17.0551 16.2935Z"
                fill={fill}
            />
            <path
                d="M12.737 13.6001C12.8561 13.7192 13.0124 13.7789 13.1687 13.7789C13.325 13.7789 13.4812 13.7192 13.6004 13.6001C13.8388 13.3617 13.8388 12.9751 13.6004 12.7368L8.99771 8.13403C8.75931 7.89563 8.37266 7.89563 8.13436 8.13403C7.89597 8.37243 7.89597 8.75897 8.13436 8.99737L12.737 13.6001Z"
                fill={fill}
            />
            <path
                d="M21.8657 8.13403C21.6273 7.89563 21.2407 7.89563 21.0024 8.13403L8.13388 21.0025C7.89548 21.2409 7.89548 21.6275 8.13388 21.8659C8.25302 21.985 8.40931 22.0447 8.5656 22.0447C8.72188 22.0447 8.87807 21.985 8.99732 21.8659L21.8657 8.99747C22.1041 8.75897 22.1041 8.37253 21.8657 8.13403Z"
                fill={fill}
            />
        </svg>

    );
};

export default CloseButton;
