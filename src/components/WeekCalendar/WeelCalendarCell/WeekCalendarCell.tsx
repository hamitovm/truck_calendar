import React, {useState} from "react";
import {TruckProposalType} from "../../../state/truck-proposals-reducer";
import {DepartmentType} from "../../../state/departments-reducer";
import {useAppDispatch} from "../../../state/hooks";
import {openTruckProposalModalAC} from "../../../state/truck-proposal-modal-reducer";
import {Chip} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {TruckProposalChip} from "./TruckProposalChip";

type WeekCalendarCellPropsType = {
    proposals: Array<TruckProposalType> | null
    date: Date
    department: DepartmentType

}
export const WeekCalendarCell = (props: WeekCalendarCellPropsType) => {
    const dispatch = useAppDispatch()
    const trucksNotToShow = useSelector<AppRootStateType, string[]>(state => state.proposalsFilter.trucksNotToShow)
    const showNewProposals = useSelector<AppRootStateType, boolean>(state =>  state.proposalsFilter.showNewProposals)
    const showRejectedProposals = useSelector<AppRootStateType, boolean>(state =>  state.proposalsFilter.showRejectedProposals)
    let proposalsToShow = props.proposals && props.proposals.filter(el => {
        let show = (el.status === "new" && showNewProposals) || (el.status === "rejected" && showRejectedProposals)  || el.status === "accepted"
        return !trucksNotToShow.includes(el.truckId) && show
    })

    const onClickHandler = (date: Date, department: DepartmentType) => {
        dispatch(openTruckProposalModalAC(date,department))
    }

    let [proposalAdderActive, setProposalAdderActive] = useState<boolean>(false )

    return (
        <div className={'item'} onMouseEnter={()=> setProposalAdderActive(true)} onMouseLeave={()=> setProposalAdderActive(false)}>
            {proposalsToShow && proposalsToShow.map(p => <TruckProposalChip key={p.id} proposal={p} date={props.date}/>)}
            <Chip label={'+'} variant="outlined" size="small"
                  className={proposalAdderActive ? 'addTruckProposalButton active': 'addTruckProposalButton'}
                  onClick={()=>onClickHandler(props.date, props.department)}/>

        </div>)
}