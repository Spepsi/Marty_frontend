/*
 *
 * PhotoPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILED,
} from './constants';

const initialState = fromJS({
  loading: false,
  data: {},
});

function photoPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PICTURE:
      return state.set('loading', true);
    case UPLOAD_PICTURE_SUCCESS:
      return state
      .set('data', action.payload)
      .set('loading', false);
    case UPLOAD_PICTURE_FAILED:
      return state
        .set('loading', false);
    default:
      return state;
  }
}

export default photoPageReducer;
