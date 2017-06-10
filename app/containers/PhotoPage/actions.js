/*
 *
 * PhotoPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPLOAD_PICTURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function actUploadIdCard(payload) {
  return {
    type: UPLOAD_PICTURE,
    payload,
  };
}
