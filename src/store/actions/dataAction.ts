import axios from 'axios';
import { Dispatch } from 'react';
import { basicRequestUrl, limit, offset } from '../../config';
import getPayload from '../../functions/getPayload';
import { TBlockAction } from '../reducers/dataReducer';
import { TErrorAction } from '../reducers/errorReducer';
import { TFetchAction } from '../reducers/fetchReducer';
import { ERROR, FETCH, GETDATA, NOFETCH } from '../types';

export type TBlockData = {
  level: string;
  chainId: string;
  timestamp: number;
  number_of_operations: number;
  volume: number;
  fees: number;
  endorsements: number;
};

const dataAction =
  () =>
  async (dispatch: Dispatch<TBlockAction | TErrorAction | TFetchAction>) => {
    dispatch({ type: FETCH });
    try {
      const response = await axios.get(
        `${basicRequestUrl}?limit=${limit}&offset=${offset}`,
      );
      const { data } = response;
      const action: TBlockAction = {
        type: GETDATA,
        payload: getPayload(data),
      };
      dispatch(action);
      dispatch({ type: NOFETCH });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

export default dataAction;
