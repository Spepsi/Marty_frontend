
import { fromJS } from 'immutable';
import repoPageReducer from '../reducer';

describe('repoPageReducer', () => {
  it('returns the initial state', () => {
    expect(repoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
