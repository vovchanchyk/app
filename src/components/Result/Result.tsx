import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useTypedSelector from '../../hooks/typedSelector'
import {Table} from '../Table'
import Loader from 'react-loader-spinner'
import dataAction from '../../store/actions/dataAction'
import { TBlockPayload } from '../../store/reducers/dataReducer'

export const Result = () => {
const dispatch = useDispatch()
useEffect(()=>{
dispatch(dataAction())
},[dispatch])

const data:TBlockPayload = useTypedSelector(state=>state.bloks)
let loading = useTypedSelector(state=> state.fetch)
let error = useTypedSelector(state=>state.error)

  return (
        <>
        {error ?(
          <div className="error">
            DATA HAS NOT RECEIVED
            </div>

        ): loading? (
           <Loader
           type="Puff"
           color="#ffff"
           height={100}
           width={100}
         />
        ) : (
        <Table data={data}/>
        )}
      </>
    )
}

