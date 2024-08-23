import {combineReducers, createStore} from 'redux'
import {configReducer} from './config-reducer';
import {loadState, saveState} from '../common/utils/localStorage';


const rootReducer = combineReducers({
    config: configReducer,
})

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)
store.subscribe(() => {
    saveState({
        config: store.getState().config,
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store