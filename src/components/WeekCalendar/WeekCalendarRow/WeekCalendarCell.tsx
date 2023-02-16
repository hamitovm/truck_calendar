import {TruckElement} from "./TruckElement";
import React, {useState} from "react";
import {TruckProposalType} from "../../../state/truck-proposals-reducer";
import {DepartmentType} from "../../../state/departments-reducer";
import {useAppDispatch} from "../../../state/hooks";
import {openTruckProposalModalAC} from "../../../state/truck-proposal-modal-reducer";

type WeelCalendarCellPropsType = {
    proposals: Array<TruckProposalType> | null
    date: Date
    department: DepartmentType

}
export const WeelCalendarCell = (props: WeelCalendarCellPropsType) => {
    const dispatch = useAppDispatch()

    const onClickHandler = (date: Date, department: DepartmentType) => {
        dispatch(openTruckProposalModalAC(date,department))
    }

    let [proposalAdderActive, setProposalAdderActive] = useState<boolean>(false )

    return (
        <div className={'item'} onMouseEnter={()=> setProposalAdderActive(true)} onMouseLeave={()=> setProposalAdderActive(false)}>
            {props.proposals && props.proposals.map(p => <TruckElement proposal={p}/>)}
            <span className={proposalAdderActive ? 'addTruckProposalButton active' : 'addTruckProposalButton'} onClick={()=>onClickHandler(props.date, props.department)}>+</span>
        </div>)
}