import { createSelector } from 'reselect';

/**
 * Direct selector to the recoPage state domain
 */
const selectRecoPageDomain = () => (state) => state.get('recoPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RecoPage
 */

const makeSelectRecoPage = () => createSelector(
  selectRecoPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRecoPage;
export {
  selectRecoPageDomain,
};
