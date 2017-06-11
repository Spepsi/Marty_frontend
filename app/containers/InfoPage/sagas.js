import { LOCATION_CHANGE, push } from 'react-router-redux';
import { takeLatest, take, cancel, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../App/constants';
import {
  FETCH_NEW_RECO,
} from './constants';
// import {
//   actFetchNewReco,
//   // actFetchNewRecoSuccess,
//   // actUploadPictureFailed,
// } from './actions';

import {
  actUploadPictureSuccess,
  actUploadPictureFailed,
} from '../PhotoPage/actions';

export function* pictureUpload(action) {
  // const data = new FormData();
  // for (let i = 0; i < action.payload.length; i += 1) {
  //   data.append(`file${i}`, action.payload[i]);
  // }
  try {
    const response = yield call(() => axios.get(`${apiUrl}/api/hellourl/${action.id}`));
    console.log('sagaResp', response);
    yield put(actUploadPictureSuccess(response.data));
    yield put(push('/info'));
  } catch (e) {
    yield put(actUploadPictureFailed());
    // yield put(actUploadPictureSuccess());
    // yield put(push('/info'));
  }
}

export function* watchPictureUpload() {
  const watcher = yield takeLatest(FETCH_NEW_RECO, pictureUpload);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchPictureUpload,
];
