import { takeLeading, fork } from "redux-saga/effects";
import { MAINACTIONSLIST } from "src/actions/mianActions";


function* changeValue() {
    console.log("enter saga");
    
}

function* watchMainSaga() {
    yield takeLeading(MAINACTIONSLIST.VALUE_CHANGE, changeValue);
}

const mainSaga = [fork(watchMainSaga)];

export default mainSaga;