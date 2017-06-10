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
  details: {
    title: 'la Joconde',
    author: 'Leonardo da Vinci',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg/225px-Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg',
  },
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
