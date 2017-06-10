
import { fromJS } from 'immutable';
import recoPageReducer from '../reducer';

describe('recoPageReducer', () => {
  it('returns the initial state', () => {
    expect(recoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
