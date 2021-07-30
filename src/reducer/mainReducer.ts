import { IMainStates } from "../types/mainType";
import { createSelector } from "reselect";
import { MAINACTIONSLIST } from 'src/actions/mianActions';


const initialState: IMainStates = {
    value: "a",
    author: "ws"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAINACTIONSLIST.VALUE_CHANGE:
            return {...state, value: action.payload};
        default:
            return state;    
    }
}

export {reducer as MainReducer}

const author = (state: IMainStates) => state.author;
export const getAuthor = createSelector([author], data => data)