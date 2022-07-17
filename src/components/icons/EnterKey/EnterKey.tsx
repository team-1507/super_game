import React, { SVGProps } from 'react';
import './EnterKey.scss';

const EnterKey = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg className="enter-key-icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.2687 1.4375H11.3562C10.6428 1.4375 10.0625 2.01783 10.0625 2.73125V10.0625H2.73125C2.01783 10.0625 1.4375 10.6428 1.4375 11.3562V20.2687C1.4375 20.9822 2.01783 21.5625 2.73125 21.5625H19.7895C20.7671 21.5625 21.5625 20.7672 21.5625 19.7896V2.73125C21.5625 2.01783 20.9822 1.4375 20.2687 1.4375ZM20.4125 19.7896C20.4125 20.1331 20.1331 20.4125 19.7895 20.4125H2.73125C2.65208 20.4125 2.5875 20.3481 2.5875 20.2687V11.3562C2.5875 11.2769 2.65208 11.2125 2.73125 11.2125H10.6375C10.955 11.2125 11.2125 10.955 11.2125 10.6375V2.73125C11.2125 2.65193 11.2771 2.5875 11.3562 2.5875H20.2687C20.3479 2.5875 20.4125 2.65193 20.4125 2.73125V19.7896Z"
                fill={fill}
            />
            <path
                d="M15.8125 6.90002C15.4949 6.90002 15.2375 7.15748 15.2375 7.47502V15.3813H7.79141L8.77126 14.4014C8.99587 14.1769 8.99587 13.8128 8.77126 13.5883C8.54665 13.3637 8.18279 13.3637 7.95818 13.5883L5.99713 15.5494C5.97031 15.5762 5.94627 15.6057 5.92511 15.6374C5.91571 15.6515 5.90932 15.6667 5.90128 15.6813C5.89128 15.6995 5.8803 15.717 5.87229 15.7364C5.86447 15.7553 5.85998 15.775 5.85429 15.7944C5.84941 15.8109 5.84306 15.8266 5.83969 15.8437C5.82488 15.918 5.82488 15.9945 5.83969 16.0689C5.84306 16.0859 5.84941 16.1017 5.85429 16.1181C5.85998 16.1376 5.86447 16.1573 5.87229 16.1762C5.8803 16.1955 5.89128 16.213 5.90128 16.2312C5.90932 16.2459 5.91571 16.2611 5.92511 16.2751C5.94627 16.3068 5.97031 16.3364 5.99713 16.3632L7.95818 18.3242C8.07048 18.4365 8.2176 18.4927 8.36472 18.4927C8.51184 18.4927 8.65896 18.4365 8.77126 18.3242C8.99587 18.0997 8.99587 17.7356 8.77126 17.5111L7.79141 16.5313H15.8125C16.13 16.5313 16.3875 16.2738 16.3875 15.9563V7.47502C16.3875 7.15748 16.13 6.90002 15.8125 6.90002Z"
                fill={fill}
            />
        </svg>
    );
}

EnterKey.defaultProps = {
    fill: '#FAF6EC',
}

export default EnterKey;
