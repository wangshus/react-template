import { takeLeading, fork } from "redux-saga/effects";
import { MAINACTIONSLIST } from "src/actions/mianActions";


function* changeValue() {
    console.log(11111111);
    
}

function* watchMainSaga() {
    yield takeLeading(MAINACTIONSLIST.VALUE_CHANGE, changeValue);
}

const mainSaga = [fork(watchMainSaga)];

export default mainSaga;