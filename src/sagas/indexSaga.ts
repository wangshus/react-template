import { all, cancel, fork, takeEvery } from "redux-saga/effects";
import { MAINACTIONSLIST } from "src/actions/mianActions";
import mainSaga from "./mainSaga";



export default function* rootSaga() {
    const allTasks = [
        ...mainSaga,
    ]

    function* rootWrapper() {
        yield all(allTasks)
    }

    let forkedWrapper = yield all([yield fork(rootWrapper)]);

    function* clearAllTask() {
        yield cancel(forkedWrapper);
        forkedWrapper = yield all([yield fork(rootWrapper)])
    }

    yield takeEvery(MAINACTIONSLIST.RESET_SAGA, clearAllTask)
}