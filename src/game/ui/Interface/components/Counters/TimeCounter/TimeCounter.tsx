import React from 'react';
import { useAppSelector } from '../../../../../../store/hooks';
import Counter from '../Counter';

const TimeCounter = () => {
    const { day } = useAppSelector((state) => state.timer);
    const timeText = `06:00 am`;

    return (
        <>
            <Counter title="Day" text={day} />
            <Counter title="Time" text={timeText} />
        </>
    );
};

export default TimeCounter;
