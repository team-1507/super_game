import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import Counter from './components/Counter';

import './Interface.scss';

const Interface = () => {
    const { money } = useAppSelector((state) => state.inventory);
    const { day } = useAppSelector((state) => state.timer);
    const moneyText = `${money} ₽`;
    const timeText = '06:00 am';

    return (
        <div className="game-page__interface">
            <div className="game-page__interface__money-counter">
                <Counter title="Money" text={moneyText} />
            </div>
            <div className="game-page__interface__time-counter">
                <Counter title="Day" text={day} />
                <Counter title="Time" text={timeText} />
            </div>
        </div>
    );
};

export default Interface;
