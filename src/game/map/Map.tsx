import React from 'react';
import MapLayer from './MapLayer';
import { MAP } from './config';

import './Map.scss';

const Map = () => {
    return (
        <>
            <MapLayer layerConfig={MAP[0]} />
            <MapLayer layerConfig={MAP[1]} />
        </>
    );
};

export default Map;
