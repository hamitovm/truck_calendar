import '../../../App.css'
import React from "react";
import {DepartmentType} from "../../../state/departments-reducer";
import {TruckProposalsType, TruckProposalType} from "../../../state/truck-proposals-reducer";
import {TruckElement} from "./TruckElement";
import {getDayMonthYear} from "../../../helpers/helpers";

export type WeekCalendarRowPropsType = {
    department: DepartmentType
    weekDays: Date[]
    weekProposals: TruckProposalsType
}

export const WeekCalendarRow = (props: WeekCalendarRowPropsType) => {
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

                    <div className={'item'}>
                        {proposals && proposals.map(p => <TruckElement proposal={p}/>)}
                    </div>)
            })}
        </div>
    )
}