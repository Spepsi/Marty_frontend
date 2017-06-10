/*
 *
 * PhotoPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function photoPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PICTURE:
      return state.set('loading', true);
    case UPLOAD_PICTURE_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default photoPageReducer;
