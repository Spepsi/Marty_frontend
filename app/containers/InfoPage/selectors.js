import { createSelector } from 'reselect';

/**
 * Direct selector to the infoPage state domain
 */
const selectInfoPageDomain = () => (state) => state.get('infoPage');
const selectPhotoPageDomain = () => (state) => state.get('photoPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by InfoPage
 */

const makeSelectInfoPage = () => createSelector(
  selectInfoPageDomain(),
  (substate) => substate.toJS()
);
// const makeSelectPhotoPage = () => createSelector(
//   selectPhotoPageDomain(),
//   (substate) => substate.toJS()
// );
export default makeSelectInfoPage;
export {
  selectInfoPageDomain,
  selectPhotoPageDomain,
};
