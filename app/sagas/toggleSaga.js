import {TOGGLE_COLOR, COLOR_TOGGLED} from '../constants/Constants';
import {put, takeEvery} from 'redux-saga/effects';

function* toggle(action) {
    const color = action.color === 'red' ? 'blue' : 'red'; // could be http request
    yield put({type: COLOR_TOGGLED, color});
}

function* toggleSaga() {
    yield takeEvery(TOGGLE_COLOR, toggle);
}

export default toggleSaga;