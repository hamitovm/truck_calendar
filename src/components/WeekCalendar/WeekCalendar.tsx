import {WeekCalendarRow} from "./WeekCalendarRow/WeekCalendarRow";
import '../../App.scss'
import {WeekCalendarHeader} from "./WeekCalendarHeader/WeekCalendarHeader";
import {departmentsInitialState} from "../../state/departments-reducer";
import {TruckProposalsType} from "../../state/truck-proposals-reducer";
import {getDayMonthYear} from "../../helpers/helpers";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

export type WeekCalendarPropsType = {
    weekDays: Date[]
}

export const WeekCalendar = (props: WeekCalendarPropsType) => {
    let proposals = useSelector<AppRootStateType, TruckProposalsType>(state => state.truckProposals)
    const weekProposals: TruckProposalsType = props.weekDays.reduce((prev, date) => {
        return {...prev, [getDayMonthYear(date)]: proposals[getDayMonthYear(date)]}
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