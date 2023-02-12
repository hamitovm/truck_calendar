import React from "react";
import '../../../App.css'

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

export const WeekCalendarHeader = (props: WeekCalendarHeaderPropsType) => {
    return (
        <div className={'truck_calendar_row'}>
            <div className={'item'}>

            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[0])}</span><br/>
                <span>{props.weekDays[0].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[1])}</span><br/>
                <span>{props.weekDays[1].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[2])}</span><br/>
                <span>{props.weekDays[2].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[3])}</span><br/>
                <span>{props.weekDays[3].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[4])}</span><br/>
                <span>{props.weekDays[4].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[5])}</span><br/>
                <span>{props.weekDays[5].getDate()}</span>
                <br/><span>{props.weekDays[0].getMonth()}</span>
            </div>
            <div className={'item'}>
                <span>{getWeekDayWord(props.weekDays[6])}</span><br/>
                <span>{props.weekDays[6].getDate()}</span>
                <br/><span>{props.weekDays[6].getMonth()}</span>
            </div>
        </div>
    )
}