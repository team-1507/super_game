import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../../store/hooks';
import { whatTimeIsItNow } from '../../../../../../utils';
import { DAILY_TAX } from '../../../../../constants';
import { decrementMoney, incrementScore } from '../../../../../store/inventorySlice';
import Counter from '../Counter';

const TimeCounter = () => {
    const { day, timestamp } = useAppSelector((state) => state.timer);
    const { money } = useAppSelector((state) => state.inventory);
    const navigate = useNavigate();

    const timeToday = whatTimeIsItNow(timestamp);
    const hrs = (`0${timeToday < (60 * 13) ? Math.floor(timeToday / 60) : Math.floor((timeToday - (12 * 60)) / 60)}`).slice(-2);
    const mnts = (`0${timeToday % 60}`).slice(-2);
    const timeText = `${hrs}:${mnts} ${(timeToday < 60 * 12) ? 'am' : 'pm'}`;
    const dispatch = useDispatch();

    useEffect(() => {
        if (money < 0) {
            navigate('/game-over');
        } else if (day > 1) {
            const tax = DAILY_TAX;
            dispatch(decrementMoney(tax));
            dispatch(incrementScore(tax));

            notification.open({
                message: 'Congratulations!',
                description: `Ivan has successfully wasted one more freaking day of his miserable life. Taxation has stolen from him ${tax}₽. Day ${day} starts.`,
            }); // извините, не удержался 🥲
        }
    }, [day, dispatch]);

    return (
        <>
            <Counter title="Day" text={day} />
            <Counter title="Time" text={timeText} />
        </>
    );
};

export default TimeCounter;
