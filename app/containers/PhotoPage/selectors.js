import { createSelector } from 'reselect';

/**
 * Direct selector to the photoPage state domain
 */
const selectPhotoPageDomain = () => (state) => state.get('photoPage');

/**
 * Other specific selectors
 */

/**
 * Default selector used by PhotoPage
 */

const makeSelectPhotoPage = () => createSelector(
  selectPhotoPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPhotoPage;
export {
  selectPhotoPageDomain,
};
