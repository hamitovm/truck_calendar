
import {TruckGroupType} from "../../../state/truck-groups-reducer";
import {TruckGroupElement} from "./TruckGroupElement";

type TruckGroupListType = {
    truckGroups: Array<TruckGroupType>
}
export const TruckGroupList = (props: TruckGroupListType) => {

    return (
        <div>
            <h4>Truck groups</h4>
            {props.truckGroups.map(el => {
                return (
                    <TruckGroupElement truckGroup={el}/>
                )
            })}
        </div>
    )
}