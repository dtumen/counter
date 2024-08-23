import {
    ActionsType,
    configReducer,
    incValueAC,
    InitialStateType,
    resetValueAC,
    updateConfigValueAC
} from './config-reducer';

describe('State Reducer', () => {
    const defaultConfig = {
        startValue: 0,
        maxValue: 5,
    };

    const createStartState = (currentValue: number = defaultConfig.startValue): InitialStateType => ({
        defaultConfig: {
            startValue: defaultConfig.startValue,
            maxValue: defaultConfig.maxValue,
        },
        currentValue,
        isChange: false,
    });

    it('should correctly update defaultConfig value', () => {
        const startState = createStartState();
        const newStartValue = 3;
        const action: ActionsType = updateConfigValueAC('startValue', newStartValue.toString());
        const endState = configReducer(startState, action);

        expect(endState.defaultConfig.startValue).toBe(newStartValue);
    });

    it('should correctly increment counter value', () => {
        const startState = createStartState();
        const action: ActionsType = incValueAC();
        const endState = configReducer(startState, action);

        expect(endState.currentValue).toBe(1);
    });

    it('should correctly reset counter value', () => {
        const startState = createStartState();
        const action: ActionsType = resetValueAC();
        const endState = configReducer(startState, action);

        expect(endState.currentValue).toBe(startState.defaultConfig.startValue);
    });
});
