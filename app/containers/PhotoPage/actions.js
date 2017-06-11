/*
 *
 * PhotoPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actUploadPicture(payload) {
  return {
    type: UPLOAD_PICTURE,
    payload,
  };
}

export function actUploadPictureSuccess(payload) {
  return {
    type: UPLOAD_PICTURE_SUCCESS,
    payload,
  };
}

export function actUploadPictureFailed() {
  return {
    type: UPLOAD_PICTURE_FAILED,
  };
}
