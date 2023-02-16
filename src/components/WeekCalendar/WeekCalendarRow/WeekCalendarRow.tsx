import '../../../App.scss'
import React, {useState} from "react";
import {DepartmentType} from "../../../state/departments-reducer";
import {TruckProposalsType, TruckProposalType} from "../../../state/truck-proposals-reducer";
import {TruckElement} from "./TruckElement";
import {getDayMonthYear} from "../../../helpers/helpers";
import {useAppDispatch} from "../../../state/hooks";
import {openTruckProposalModalAC} from "../../../state/truck-proposal-modal-reducer";
import {WeelCalendarCell} from "./WeekCalendarCell";

export type WeekCalendarRowPropsType = {
    department: DepartmentType
    weekDays: Date[]
    weekProposals: TruckProposalsType
}

export const WeekCalendarRow = (props: WeekCalendarRowPropsType) => {

    let [proposalAdderActive, setProposalAdderActive] = useState<boolean>(false )
    // console.log(props.weekProposals)
    return (
        <div className={'truck_calendar_row'}>
            <div className={'item'}>{props.department.shortName}</div>
            {props.weekDays.map( el => {
                let proposals: Array<TruckProposalType> = props.weekProposals[getDayMonthYear(el)] && props.weekProposals[getDayMonthYear(el)].filter(proposal => {
                    return (
                        proposal.departmentId === props.department.id
                    )
                })
                return (
                    // <div className={'item'} onMouseEnter={()=> setProposalAdderActive(true)} onMouseLeave={()=> setProposalAdderActive(false)}>
                    //     {proposals && proposals.map(p => <TruckElement proposal={p}/>)}
                    //     {proposalAdderActive && <span className={'addTruckProposalButton'} onClick={()=>onClickHandler(el, props.department)}>+</span>}
                    // </div>
                                <WeelCalendarCell proposals={proposals} date={el} department={props.department}/>
                )

            })}
        </div>
    )
}