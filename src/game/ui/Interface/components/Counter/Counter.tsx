import React from 'react';

import './Counter.scss';

type CounterProps = {
    title: string;
    text: string | number;
};

const Counter = (props: CounterProps) => {
    const { title, text } = props;

    return (
        <div className="interface-counter">
            <span className="interface-counter__title">{title}</span>
            <span className="interface-counter__text">{text}</span>
        </div>
    );
};

export default Counter;
