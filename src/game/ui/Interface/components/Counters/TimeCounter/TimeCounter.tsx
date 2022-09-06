import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../../store/hooks';
import { tickMinute } from '../../../../../store/timerSlice';
import Counter from '../Counter';

const TimeCounter = () => {
    const { day, speedTime, pause } = useAppSelector((state) => state.timer);
    const dispatch = useAppDispatch();
    const timeText = `06:00 am`;
    // const time = `${date.getHours()}:${date.getMinutes()} am`;
    // console.warn(time)
    const tickTime = () => {
        if (pause) return

        dispatch(tickMinute());
    }

    useEffect(() => {
        const timeout = setTimeout(tickTime, 60 * 1000 / speedTime);

        return () => {
            clearTimeout(timeout);
        }
    });

    return (
        <>
            <Counter title="Day" text={day} />
            <Counter title="Time" text={timeText} />
        </>
    );
};

export default TimeCounter;
