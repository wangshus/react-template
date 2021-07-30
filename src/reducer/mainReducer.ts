import { IMainStates } from "../types/mainType";
import { createSelector } from "reselect";
import { MAINACTIONSLIST } from 'src/actions/mianActions';
import { IAppStates } from "src/types/indexType";


const initialState: IMainStates = {
    value: "0",
    author: "ws"
}

const reducer = (state = initialState, action: { type: String; payload: any; }) => {
    switch (action.type) {
        case MAINACTIONSLIST.VALUE_CHANGE:
            return {...state, value: action.payload};
        default:
            return state;    
    }
}

export {reducer as MainReducer}

const author = (state: IAppStates) => state.mainReducer.author;

export const getAuthor = createSelector([author], data => data)