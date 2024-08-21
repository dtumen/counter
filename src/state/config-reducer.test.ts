import {configReducer, updateConfigValueAC, updateConfigValuesLocalStorageAC} from './config-reducer';
import { ValuesConfigType } from '../common/types/types';

it('configReducer should return update state with startValue', () => {
    const startState: ValuesConfigType = {
        maxValue: 5,
        startValue: 0,
    };

    const action = updateConfigValueAC('startValue', '3');

    const endState = configReducer(startState, action);

    console.log('startValue: ', endState);

    expect(endState).not.toBe(startState);
    expect(endState.startValue).toEqual(3);
})

it('configReducer should return correct state with maxValue', () => {
    const startState: ValuesConfigType = {
        maxValue: 5,
        startValue: 0,
    };

    const action = updateConfigValueAC('maxValue', '10');

    const endState = configReducer(startState, action);

    console.log('maxValue: ', endState);

    expect(endState).not.toBe(startState);
    expect(endState.maxValue).toEqual(10);
})

it('configReducer should return correct state for values from localStorage', () => {
    const startState: ValuesConfigType = {
        maxValue: 5,
        startValue: 0,
    };

    const localSt = {
        maxValue: 15,
        startValue: 10,
    }

    const action = updateConfigValuesLocalStorageAC(localSt);

    const endState = configReducer(startState, action);

    console.log('local: ', endState);

    expect(endState).not.toBe(startState);
    expect(endState.maxValue).toEqual(15);
    expect(endState.startValue).toEqual(10);
})