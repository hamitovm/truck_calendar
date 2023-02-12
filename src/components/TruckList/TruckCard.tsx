import {TruckType} from "../../state/truck-cards-reducer";

export type TruckListItemPropsType = {
    truck: TruckType
}

export const TruckCard = (props: TruckListItemPropsType) => {
    return (
        <div className={'truck_list_item'}>
            <div>{props.truck.title}</div>
            <div>+</div>
        </div>
    )
}