/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import useTypedSelector from '../../hooks/typedSelector';
import { Table } from '../Table';
import dataAction from '../../store/actions/dataAction';
import { TBlockPayload } from '../../store/reducers/dataReducer';

export const Result = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataAction());
  }, [dispatch]);

  const data: TBlockPayload = useTypedSelector((state) => state.bloks);
  const loading = useTypedSelector((state) => state.fetch);
  const error = useTypedSelector((state) => state.error);

  return (
    <>
      {error ? (
        <div className='error'>DATA HAS NOT RECEIVED</div>
      ) : loading ? (
        <Loader type='Puff' color='#ffff' height={100} width={100} />
      ) : (
        <Table data={data} />
      )}
    </>
  );
};
