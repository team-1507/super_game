import React, { RefObject } from 'react';
import Counters from './components/Counters';
import ActionButtons from '../../../game/ui/ActionButtons';
import withControls from '../../../game/controls/withControls';

import './Interface.scss';

interface props {
    refs: {
        gardenRef: RefObject<HTMLCanvasElement>;
    };
};

const { MoneyCounter, TimeCounter, SeedCounter } = Counters;

const Interface = (props: props) => {
    const { refs: { gardenRef } } = props;
    const ActionButtonsWithControls = withControls(ActionButtons, { gardenRef });

    return (
        <div className="game-page__interface">
            <div className="game-page__interface__money-counter">
                <MoneyCounter />
            </div>
            <div className="game-page__interface__time-counter">
                <TimeCounter />
            </div>
            <div className="game-page__interface__seed-counter">
                <SeedCounter type="tomato" />
                <SeedCounter type="potato" />
                <SeedCounter type="carrot" />
                <SeedCounter type="cabbage" />
                <SeedCounter type="pepper" />
                <SeedCounter type="squash" />
            </div>
            <ActionButtonsWithControls />
        </div>
    );
};

export default Interface;
