import React from 'react';
import s from './Counter.module.css';
import {Button} from '../Button/Button';
import {CurrentValueType, INCORRECT_MESSAGE, PRESS_MESSAGE, ValuesConfigType} from '../../types/types';

type CounterPropsType = {
    currentValue: CurrentValueType
    defaultConfig: ValuesConfigType
    isChange: boolean
    onIncrease: () => void;
    onReset: () => void;
}

const Counter = (props: CounterPropsType) => {
    const {
        currentValue,
        defaultConfig: {maxValue, startValue},
        isChange,
    } = props;

    let isIncreaseButtonDisabled = isChange || (currentValue === maxValue);
    let isResetButtonDisabled = isChange || (currentValue === startValue);


    let styleValue =
        currentValue === INCORRECT_MESSAGE ? s.redMessage :
        currentValue === PRESS_MESSAGE ? s.textMessage :
        currentValue === maxValue ? s.countRed :
        s.count;


    return (
        <div className={s.counter}>
            <div className={styleValue}>
                {currentValue}
            </div>
            <div className={s.btnContainer}>
                <Button name={'inc'} onClick={props.onIncrease}
                        disabled={isIncreaseButtonDisabled}/>
                <Button name={'reset'} onClick={props.onReset}
                        disabled={isResetButtonDisabled}/>
            </div>
        </div>
    );
};

export default Counter;