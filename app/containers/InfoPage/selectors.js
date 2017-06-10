import { createSelector } from 'reselect';

/**
 * Direct selector to the infoPage state domain
 */
const selectInfoPageDomain = () => (state) => state.get('infoPage');

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

export default makeSelectInfoPage;
export {
  selectInfoPageDomain,
};
