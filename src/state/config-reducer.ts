import {CurrentValueType, INCORRECT_MESSAGE, PRESS_MESSAGE, ValuesConfigType} from '../common/types/types';

let startValueForState = 0;

export const initialState: InitialStateType = {
    defaultConfig: {
        maxValue: 5,
        startValue: startValueForState,
    },
    currentValue: startValueForState,
    isChange: false,
}

export const configReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-CONFIG-VALUES':
            return {...state, defaultConfig: {...state.defaultConfig, ...action.payload}}
        case 'PRESS-SET':
            return {...state, currentValue: action.payload}
        case 'SET-CHANGE-STATUS':
            return {...state, isChange: action.payload}
        case 'RESET-COUNTER':
            return {...state, currentValue: state.defaultConfig.startValue}
        case 'INCORRECT-VALUE':
            return {...state, currentValue: action.payload}
        case 'INCREMENT-COUNTER':
            let newCurrentValue = typeof state.currentValue === 'number' ? state.currentValue + 1 : state.currentValue;
            return {...state, currentValue: newCurrentValue}
        case 'SET-COUNTER':
            let {currentValue, defaultConfig: {startValue}} = state;
            let current = ((typeof currentValue === 'number') && currentValue !== startValue) ? currentValue : startValue;
            return {...state, currentValue: current}

        default:
            return state;
    }
}

/* --------------------------------ACTION_CREATORS: ------------------------------*/

// 1. defaultConfig:
export const updateConfigValueAC = (name: string, value: string) => {
    return {
        type: 'UPDATE-CONFIG-VALUES',
        payload: {
            [name]: Number(value),
        }
    } as const
}

// 2. change:
export const changeStatusAC = (value: boolean) => ({type: 'SET-CHANGE-STATUS', payload: value}) as const

// 3. counter:
export const incValueAC = () => ({type: 'INCREMENT-COUNTER'}) as const
export const resetValueAC = () => ({type: 'RESET-COUNTER'}) as const
export const setValueAC = () => ({type: 'SET-COUNTER'}) as const
export const incorrectValueAC = () => ({type: 'INCORRECT-VALUE', payload: INCORRECT_MESSAGE} as const)
export const pressMessageAC = () => ({type: 'PRESS-SET', payload: PRESS_MESSAGE} as const)

/* --------------------------------ANOTHER TYPES: --------------------------------*/
export type InitialStateType = {
    defaultConfig: ValuesConfigType,
    currentValue: CurrentValueType,
    isChange: boolean,
}

/* --------------------------------ACTIONS TYPE: ---------------------------------*/

export type ActionsType =
    | UpdateConfigActionType
    | SetValueType
    | IncValueType
    | ResetValueType
    | IncorrectValueType
    | PressMessageType
    | ChangeStatusType

/* --------------------------------ACTION_CREATOR TYPES: -------------------------*/

// 1. defaultConfig:
type UpdateConfigActionType = ReturnType<typeof updateConfigValueAC>

// 2. isChange:
type ChangeStatusType = ReturnType<typeof changeStatusAC>

// 3. counter:
type SetValueType = ReturnType<typeof setValueAC>
type IncValueType = ReturnType<typeof incValueAC>
type ResetValueType = ReturnType<typeof resetValueAC>
type IncorrectValueType = ReturnType<typeof incorrectValueAC>
type PressMessageType = ReturnType<typeof pressMessageAC>

