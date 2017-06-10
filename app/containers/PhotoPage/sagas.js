import { LOCATION_CHANGE, push } from 'react-router-redux';
import { takeLatest, take, cancel, put, call, select } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../App/constants';
import {
  UPLOAD_PICTURE,
} from './constants';

export function* idCardUpload(action) {
  const data = new FormData();
  for (let i = 0; i < action.payload.length; i += 1) {
    data.append(`file${i}`, action.payload[i]);
  }
  try {
    const response = yield call(() => axios.post(`${apiUrl}/api/hello`, data));
    console.log(response);
    // const nextRoute = yield select(makeSelectNextRoute('hostDocs'));
    // yield put(push(nextRoute));
    // yield put(actUploadIdCardSuccess(response.data));
  } catch (e) {
    // yield put(actUploadIdCardSuccess(true));
  }
}

export function* watchIdCardUpload() {
  const watcher = yield takeLatest(UPLOAD_PICTURE, idCardUpload);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchIdCardUpload,
];
