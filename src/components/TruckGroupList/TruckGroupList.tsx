
import {TruckGroupType} from "../../state/truck-groups-reducer";
import {TruckGroupElement} from "./TruckGroupElement";

type TruckGroupListType = {
    truckGroups: Array<TruckGroupType>
}
export const TruckGroupList = (props: TruckGroupListType) => {

    return (
        <div>
            <h3>Truck groups</h3>
            {props.truckGroups.map(el => {
                return (
                    <TruckGroupElement truckGroup={el}/>
                )
            })}
        </div>
    )
}