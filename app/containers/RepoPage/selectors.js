import { createSelector } from 'reselect';

/**
 * Direct selector to the repoPage state domain
 */
const selectRepoPageDomain = () => (state) => state.get('repoPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RepoPage
 */

const makeSelectRepoPage = () => createSelector(
  selectRepoPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRepoPage;
export {
  selectRepoPageDomain,
};
