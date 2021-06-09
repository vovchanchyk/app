import { TBlockData } from "../store/actions/dataAction";
import { TBlock} from "../store/reducers/dataReducer";
import getDate from "./getDate";

function getPayload(data:TBlockData[]): TBlock[]{
    const payload = data.map((el:TBlockData)=>{    
        let block:TBlock = {
            blockId: new Intl.NumberFormat('de-DE').format(+el.level),
            baker: el.chainId,
            created: getDate(el.timestamp),
            number_of_operations: el.number_of_operations,
            volume: el.volume,
            fees: el.fees,
        }
        return block
    })
    return payload
}
export default getPayload;