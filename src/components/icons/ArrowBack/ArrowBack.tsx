import React, { SVGProps } from 'react';
import './ArrowBack.scss';

const ArrowBack = (props:SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg className="arrow-back-icon" width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.304 15.6C7.98133 14.0213 6.616 12.656 5.208 11.504C3.8 10.352 2.34933 9.41333 0.856001 8.688V7.536C3.8 6.04267 6.616 3.73867 9.304 0.623999H11.544C10.8613 2.07467 10.1787 3.35467 9.496 4.464C8.81333 5.53067 8.152 6.42667 7.512 7.152V9.072C8.152 9.75467 8.81333 10.6507 9.496 11.76C10.1787 12.8267 10.8613 14.1067 11.544 15.6H9.304ZM7.192 9.456V6.768H45.144V9.456H7.192Z"
                fill={fill}
            />
        </svg>
    );
};

export default ArrowBack;
