import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {ConfigureCount} from './components/ConfigureCount/ConfigureCount';
import {CurrentValueType, ValuesConfigType} from './common/types/types';

import {
    incorrectValueAC,
    pressMessageAC,
    resetValueAC,
    setValueAC,
    incValueAC,
    updateConfigValueAC, changeStatusAC,
} from './state/config-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';


function App() {
    const dispatch = useDispatch();
    const defaultConfig = useSelector<AppRootStateType, ValuesConfigType>((state) => state.config.defaultConfig);

    const currentValue = useSelector<AppRootStateType, CurrentValueType>((state) => state.config.currentValue);
    const isChange = useSelector<AppRootStateType, boolean>((state) => state.config.isChange);

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setIsChange(true);
        dispatch(changeStatusAC(true))
        const {name, value} = event.currentTarget;

        const action = updateConfigValueAC(name, value);
        dispatch(action);
    };


    useEffect(() => {
        const {startValue, maxValue} = defaultConfig;

        if (startValue < 0 || startValue >= maxValue) {
            dispatch(incorrectValueAC())
        } else if (isChange) {
            dispatch(pressMessageAC())
        } else {
            dispatch(setValueAC())
        }

    }, [defaultConfig, isChange]);


    const setButtonHandler = () => {
        dispatch(changeStatusAC(false))
    };

    const increaseHandler = () => {
        dispatch(incValueAC())
    };
    const resetHandler = () => {
        dispatch(resetValueAC())
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
