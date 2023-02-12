import {TruckProposalType} from "../../../state/truck-proposals-reducer";
import {truckListInitialState} from "../../../state/truck-cards-reducer";

export type TruckElementPropsType = {
    proposal: TruckProposalType
}

export const TruckElement = (props: TruckElementPropsType) => {
    const truck = truckListInitialState.find(el => el.id === props.proposal.truckId)
    return (
        <span className={'truck_element'}>
            {truck && truck.title}
        </span>
    )
}