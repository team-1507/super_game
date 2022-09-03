import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import Counter from './components/Counter';

import './Interface.scss';

const Interface = () => {
    const { money } = useAppSelector((state) => state.inventory);
    const moneyText = `${money} ₽`;

    return (
        <div className="game-page__interface">
            <div className="game-page__interface__money-counter">
                <Counter title="Money" text={moneyText} />
            </div>
        </div>
    );
};

export default Interface;
