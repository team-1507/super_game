import React from 'react';
import { useAppSelector } from '../../../../../../store/hooks';
import Counter from '../Counter';

const MoneyCounter = () => {
    const { money } = useAppSelector((state) => state.inventory);
    const moneyText = `${money} ₽`;

    return (
        <Counter title="Money" text={moneyText} />
    );
};

export default MoneyCounter;
