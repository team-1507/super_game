import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../../store/hooks';
import { buySeed, selectIt, Seeds } from '../../../../../store/inventorySlice';
import FastBuy from '../../../../../../components/icons/FastBuy';
import { SPRITE_SHEET, SPRITE_SIZE, ASSET_TILE_COORDS } from '../../../../../plants/config';
import { SEED_PRICES } from '../../../../../plants/constants';

import './SeedCounter.scss';

type props = {
    type: string;
};

const HARVESTED = 6;

const SeedCounter = (props: props) => {
    const type = props.type as keyof Seeds;
    const { seeds, isUse } = useAppSelector((state) => state.inventory);
    const dispatch = useAppDispatch();

    const countSeeds = seeds[type];
    const priceSeed = SEED_PRICES[type];
    const activeClass = isUse === type ? 'interface__seed-counter--active' : '';
    const title = `${type[0].toUpperCase()}${type.slice(1)}`;
    const regexp = new RegExp(`${type}.*?_${HARVESTED}`, 'i');
    const tileCoords: number[] = Object.entries(ASSET_TILE_COORDS)
        .find(([key, value]) => regexp.test(key))?.[1] || [6, 1];
    const { width, height } = SPRITE_SIZE;
    const top = (tileCoords?.[0] - 1) * height;
    const left = (tileCoords?.[1] - 1) * width;
    const backgroundPosition = `${-left}px ${-top}px`;
    const imageStyles = { backgroundPosition, backgroundImage: `url(${SPRITE_SHEET})` };

    const getClass = (text?: string, extra?: string) => {
        return (
            `interface__seed-counter${text ? `__${text}` : ''
            }${extra ? ` ${extra}` : ''}`
        );
    };
    const buySeedFn = (e: any) => {
        e.stopPropagation();
        dispatch(buySeed(type));
    };
    const selectItFn = () => dispatch(selectIt(type));

    return (
        <div className={getClass('', activeClass)} onClick={selectItFn}>
            <span className={getClass('title')}>{title}</span>
            <div className={getClass('content')}>
                <div className={getClass(`content__image image-${type}`)} style={imageStyles} />
                <span className={getClass('content__text')}>{countSeeds}</span>
                <span className={getClass('content__buy-btn')} onClick={buySeedFn}>
                    <FastBuy />
                </span>
                <span className={getClass('content__price')}>
                    {priceSeed}
                    {' '}
                    ₽
                </span>
            </div>
        </div>
    );
};

export default SeedCounter;
