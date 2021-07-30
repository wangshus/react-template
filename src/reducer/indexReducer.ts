import { MainReducer } from './mainReducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';



export const reducerIndex = (history: History) => {
    return {
        router: connectRouter(history),
        mainReducer: MainReducer,
    }
}