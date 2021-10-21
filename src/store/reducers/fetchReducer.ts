import { FETCH, NOFETCH } from '../types';

export type TFetchAction = {
  type: string;
};

function fetchReducer(state = true, action: TFetchAction) {
  if (action.type === FETCH) {
    return true;
  }
  if (action.type === NOFETCH) {
    return false;
  }

  return state;
}

export default fetchReducer;
