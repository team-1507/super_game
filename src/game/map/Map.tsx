import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import MapLayer from './MapLayer';

import './Map.scss';

const Map = () => {
    const mapState = useSelector((state: RootState) => state.mapState);
    return (
        <>
            <MapLayer layerConfig={mapState[0]} />
            <MapLayer layerConfig={mapState[1]} />
        </>
    );
};

export default Map;
