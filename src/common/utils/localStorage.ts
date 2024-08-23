import {AppRootStateType} from '../../state/store';

export const loadState = () => {
    try {
        let serialized = localStorage.getItem('counter-state');
        if (serialized === null) {
            return undefined;
        }
        return JSON.parse(serialized);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-state', serializedState);
    } catch {
        // игнорировать ошибки записи
    }
}