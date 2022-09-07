import React from 'react';

const YandexIcon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="49.1936" height="50" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_451_2" transform="translate(-0.0081967) scale(0.00338798 0.00333333)" />
                </pattern>
                <image id="image0_451_2" width="300" height="300" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );
};

export default YandexIcon;
