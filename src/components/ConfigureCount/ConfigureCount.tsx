import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import s from './ConfigureCount.module.css';
import {ValuesConfigType} from '../../types/types';

type ConfigureCountPropsType = {
    defaultConfig: ValuesConfigType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isChange: boolean;
    onSet: () => void;
};

const ConfigureCount = (props: ConfigureCountPropsType) => {
    const {
        defaultConfig: {startValue, maxValue},
        isChange,
    } = props;

    let errorMaxInputStyle = maxValue <= startValue ? s.errorInput : '';
    let errorMinInputStyle = startValue >= maxValue || startValue < 0 ? s.errorInput : '';

    let isSetButtonDisable = startValue >= maxValue || startValue < 0 || !isChange;

    return (
        <div className={s.config}>
            <form className={s.inputsContainer}>
                <div className={s.container}>
                    <label htmlFor="max">max value:</label>
                    <input
                        className={errorMaxInputStyle}
                        type="number"
                        id="max"
                        name="maxValue"
                        value={maxValue}
                        onChange={props.onChange}
                    />
                </div>
                <div className={s.container}>
                    <label htmlFor="start">start value:</label>
                    <input
                        className={errorMinInputStyle}
                        type="number"
                        max={maxValue}
                        id="start"
                        name="startValue"
                        value={startValue}
                        onChange={props.onChange}
                    />
                </div>
                <div className={s.btnContainer}>
                    <Button
                        name={'set'}
                        disabled={isSetButtonDisable}
                        onClick={props.onSet}
                    />
                </div>
            </form>
        </div>
    );
};

export default ConfigureCount;
