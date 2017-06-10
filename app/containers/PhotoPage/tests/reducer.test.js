
import { fromJS } from 'immutable';
import photoPageReducer from '../reducer';

describe('photoPageReducer', () => {
  it('returns the initial state', () => {
    expect(photoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
