import {ValuesConfigType} from '../common/types/types';

type UpdateConfigActionType = {
    type: 'UPDATE-CONFIG-VALUES',
    payload: {
        [key: string]: number;
    }
}

type UpdateConfigFromLocalActionType = {
    type: 'UPDATE-CONFIG-VALUES-FROM-LOCAL',
    payload: {
        [key: string]: number;
    }
}

type ActionsType =
    | UpdateConfigActionType | UpdateConfigFromLocalActionType

const initialState: ValuesConfigType = {
    maxValue: 5,
    startValue: 0,
}

export const configReducer = (state: ValuesConfigType = initialState, action: ActionsType): ValuesConfigType => {
    switch (action.type) {
        case 'UPDATE-CONFIG-VALUES': {
            return {
                ...state,
                ...action.payload,
            }
        }
        case 'UPDATE-CONFIG-VALUES-FROM-LOCAL': {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return { ...state };
    }
}

export const updateConfigValueAC = (name: string, value: string): UpdateConfigActionType => {
    return {
        type: 'UPDATE-CONFIG-VALUES',
        payload: {
            [name]: Number(value),
        }
    }
}

export const updateConfigValuesLocalStorageAC = (objFromLocal: ValuesConfigType): UpdateConfigFromLocalActionType => {
    return {
        type: 'UPDATE-CONFIG-VALUES-FROM-LOCAL',
        payload: objFromLocal
    }
}