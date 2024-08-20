import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {ConfigureCount} from './components/ConfigureCount/ConfigureCount';
import {CurrentValueType, INCORRECT_MESSAGE, PRESS_MESSAGE, ValuesConfigType} from './common/types/types';
import {readFromLocalStorage, writeToLocalStorage} from './common/utils/localStorage';

const STORAGE_KEY = {
    defaultConfig: 'defaultConfig',
    currentValue: 'currentValue',
    isChange: 'isChange',
}


function App() {
    const [defaultConfig, setDefaultConfig] = useState<ValuesConfigType>({
        maxValue: 5,
        startValue: 0,
    });

    const [currentValue, setCurrentValue] = useState<CurrentValueType>(defaultConfig.startValue);
    const [isChange, setIsChange] = useState(false);

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChange(true);
        const {name, value} = event.currentTarget;

        setDefaultConfig((prevConfig) => ({
            ...prevConfig,
            [name]: Number(value),
        }));
    };


    useEffect(() => {
        const {startValue, maxValue} = defaultConfig;

        if (startValue < 0 || startValue >= maxValue) {
            setCurrentValue(INCORRECT_MESSAGE);
        } else if (isChange) {
            setCurrentValue(PRESS_MESSAGE);
        } else {
            setCurrentValue(startValue);
        }

    }, [defaultConfig, isChange]);

    useEffect(() => {
        const defaultConfigFromLocal = readFromLocalStorage(STORAGE_KEY.defaultConfig);
        const currentValueFromLocal = readFromLocalStorage(STORAGE_KEY.currentValue);
        const isChangeFromLocal = readFromLocalStorage(STORAGE_KEY.isChange);

        if (defaultConfigFromLocal) {
            setDefaultConfig(defaultConfigFromLocal);
        }

        if (currentValueFromLocal !== null) {
            setCurrentValue(currentValueFromLocal);
        }

        setIsChange(isChangeFromLocal)

    }, []);

    useEffect(() => {
        writeToLocalStorage(STORAGE_KEY.currentValue, currentValue);
        writeToLocalStorage(STORAGE_KEY.defaultConfig, defaultConfig);
        writeToLocalStorage(STORAGE_KEY.isChange, isChange);
    }, [defaultConfig, currentValue, isChange]);

    const setButtonHandler = () => {
        setIsChange(false);
    };

    const increaseHandler = () => {
        setCurrentValue((prevValue) => {
            if (typeof prevValue === 'number') {
                return prevValue + 1;
            }

            return prevValue;
        })
    };
    const resetHandler = () => {
        if (typeof currentValue === 'number') {
            setCurrentValue(defaultConfig.startValue);
        }
    };

    return (
        <div className="App">
            <ConfigureCount
                defaultConfig={defaultConfig}
                onChange={changeHandler}
                isChange={isChange}
                onSet={setButtonHandler}
            />
            <Counter
                currentValue={currentValue}
                defaultConfig={defaultConfig}
                isChange={isChange}
                onIncrease={increaseHandler}
                onReset={resetHandler}
            />
        </div>
    );
}

export default App;
