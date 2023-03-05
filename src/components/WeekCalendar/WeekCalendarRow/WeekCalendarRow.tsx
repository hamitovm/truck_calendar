import '../../../App.scss'
import React from "react";
import {DepartmentType} from "../../../state/departments-reducer";
import {TruckProposalsType, TruckProposalType} from "../../../state/truck-proposals-reducer";
import {getDayMonthYear} from "../../../helpers/helpers";
import {WeekCalendarCell} from "../WeelCalendarCell/WeekCalendarCell";

export type WeekCalendarRowPropsType = {
    department: DepartmentType
    weekDays: Date[]
    weekProposals: TruckProposalsType
}

export const WeekCalendarRow = (props: WeekCalendarRowPropsType) => {

    return (
        <div className={'truck_calendar_row'}>
            <div className={'item'}>{props.department.shortName}</div>
            {props.weekDays.map(el => {
                let proposals: Array<TruckProposalType> = props.weekProposals[getDayMonthYear(el)] && props.weekProposals[getDayMonthYear(el)].filter(proposal => {
                    return (
                        proposal.departmentId === props.department.id
                    )
                })
                return (
                    <WeekCalendarCell proposals={proposals} date={el} department={props.department}/>
                )

            })}
        </div>
    )
}