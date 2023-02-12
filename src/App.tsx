import React, {useState} from 'react';
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {WeekCalendar} from "./components/WeekCalendar/WeekCalendar";
import {TruckCards} from "./components/TruckList/TruckCards";



function App() {
    let today = new Date()
    let [currentDate, setCurrentDate] = useState<Date>(today)

    const onCalendarChange = (date: Date) => {
        setCurrentDate(date)
        setWeekDays(getCurrentWeekDays(date))
    }

    const createDates = (month: number) => {
        let dates = []
        for (let i = 1; i < 31; i++) {
            dates.push(new Date(2023, month, i))
        }
        return dates
    }

    const allJanDates = createDates(0)

    const getWeekNumber = (date: Date) => {
        let oneJan: Date = new Date(date.getFullYear(), 0, 1);
        let numberOfDays = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        let daysInFirstWeek = 8 - (oneJan.getDay() === 0 ? 7 : oneJan.getDay())
        let result = Math.ceil((numberOfDays + (7 - daysInFirstWeek)) / 7);
        return result
    }

    const getCurrentWeekDays = (date: Date) => {
        let days: Date[] = []
        let day = date.getDay() === 0 ? 7 : date.getDay()
        let mondayDay = new Date(+date - (day - 1) * 24 * 60 * 60 * 1000)

        for (let i = 0; i < 7; i++) {
            days.push(new Date(+mondayDay + i * 24 * 60 * 60 * 1000))
        }
        return days;
    }

    let [weekDays, setWeekDays] = useState<Date[]>(getCurrentWeekDays(today))


    return (
        <div className="App">
            <header className={'page-header'}>

            </header>
            <main className={'main'}>
                <div className={'sidebar'}>
                    <Calendar className={'react-calendar'} onChange={onCalendarChange}/>
                    <TruckCards/>
                </div>
                <WeekCalendar weekDays={weekDays}/>
            </main>
        </div>
    );
}

export default App;
