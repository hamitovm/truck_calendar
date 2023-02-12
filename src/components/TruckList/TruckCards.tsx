import {truckListInitialState} from "../../state/truck-cards-reducer";
import {TruckCard} from "./TruckCard";

export type TruckListPropsType = {

}

export const TruckCards = (props: TruckListPropsType) => {
    return (
        <div className={'truck_list'}>
            <h3>Truck list</h3>
            {truckListInitialState.map(el => {
                return (
                    <TruckCard truck={el}/>
                )
            })}
        </div>
    )
}