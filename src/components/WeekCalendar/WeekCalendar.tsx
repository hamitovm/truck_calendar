import {WeekCalendarRow} from "./WeekCalendarRow/WeekCalendarRow";
import '../../App.css'
import {WeekCalendarHeader} from "./WeekCalendarHeader/WeekCalendarHeader";
import {departmentsInitialState} from "../../state/departments-reducer";
import {truckProposalsInitialState, TruckProposalsType, TruckProposalType} from "../../state/truck-proposals-reducer";
import {getDayMonthYear} from "../../helpers/helpers";

export type WeekCalendarPropsType = {
    weekDays: Date[]
}

export const WeekCalendar = (props: WeekCalendarPropsType) => {
    const weekProposals: TruckProposalsType = props.weekDays.reduce((prev, date) => {
        return {...prev, [getDayMonthYear(date)]: truckProposalsInitialState[getDayMonthYear(date)]}
    }, {})

    return (
        <div className={'truck_calendar'}>
            <WeekCalendarHeader weekDays={props.weekDays}/>
            {
                departmentsInitialState.map(el => {
                    return <WeekCalendarRow department={el}
                                            weekDays={props.weekDays}
                                            weekProposals={weekProposals}/>
                })
            }
        </div>
    )
}