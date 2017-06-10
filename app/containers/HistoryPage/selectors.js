import { createSelector } from 'reselect';

/**
 * Direct selector to the historyPage state domain
 */
const selectHistoryPageDomain = () => (state) => state.get('historyPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HistoryPage
 */

const makeSelectHistoryPage = () => createSelector(
  selectHistoryPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHistoryPage;
export {
  selectHistoryPageDomain,
};
