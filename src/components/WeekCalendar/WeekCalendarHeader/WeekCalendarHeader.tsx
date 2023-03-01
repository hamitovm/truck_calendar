import React from "react";
import '../../../App.scss'

export type WeekCalendarHeaderPropsType = {
    weekDays: Date[]
}
export const getWeekDayWord = (date: Date) => {
    switch(date.getDay()) {
        case 0:
            return 'Вс'
        case 1:
            return 'Пн'
        case 2:
            return 'Вт'
        case 3:
            return 'Ср'
        case 4:
            return 'Чт'
        case 5:
            return 'Пт'
        case 6:
            return 'Сб'
    }
}
export const getMonthWord = (date: Date) => {
    switch(date.getMonth()) {
        case 0:
            return 'Январь'
        case 1:
            return 'Февраль'
        case 2:
            return 'Март'
        case 3:
            return 'Апрель'
        case 4:
            return 'Май'
        case 5:
            return 'Июнь'
        case 6:
            return 'Июль'
        case 7:
            return 'Август'
        case 8:
            return 'Сентябрь'
        case 9:
            return 'Октябрь'
        case 10:
            return 'Ноябрь'
        case 11:
            return 'Декабрь'
    }
}

export const WeekCalendarHeader = (props: WeekCalendarHeaderPropsType) => {
    console.log(props.weekDays)
    let months = props.weekDays.map(el => el.getMonth())
    console.log(months)
    return (
        <div className={'truck_calendar_row'}>
            <div className={'item'}>

            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[0])}</span><br/>
                <span>{props.weekDays[0].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[0])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[1])}</span><br/>
                <span>{props.weekDays[1].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[1])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[2])}</span><br/>
                <span>{props.weekDays[2].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[2])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[3])}</span><br/>
                <span>{props.weekDays[3].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[3])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[4])}</span><br/>
                <span>{props.weekDays[4].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[4])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[5])}</span><br/>
                <span>{props.weekDays[5].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[5])}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[6])}</span><br/>
                <span>{props.weekDays[6].getDate()}</span>
                <br/><span>{getMonthWord(props.weekDays[6])}</span>
            </div>
        </div>
    )
}