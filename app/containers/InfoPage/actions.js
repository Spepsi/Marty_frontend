/*
 *
 * InfoPage actions
 *
 */

import {
  FETCH_NEW_RECO,
} from './constants';

export function actFetchNewReco(id) {
  return {
    type: FETCH_NEW_RECO,
    id,
  };
}
