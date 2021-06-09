import React  from 'react'
import { TBlockPayload } from '../../store/reducers/dataReducer'


const Table:React.FC<{data:TBlockPayload}> = ({data}) => {

const titles = Object.keys(data[0])

    return (
        <div className="table">
            <h3 className="table__title">Tezos blocks</h3>
            <div className="table__head">
               {titles.map(el=><div className="table__cell">{el}</div>)}
            </div>
            <div className="table__body">
                {data.map(el=>{
                  return  <div className="table__row">
                        {Object.values(el).map((cell:any)=><div className="table__cell">{cell} </div>)}
                    </div>
                })}
            </div>
            
            
        </div>
    )
}

export default Table
