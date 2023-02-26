import React, {useState} from 'react';
import './App.scss';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {WeekCalendar} from "./components/WeekCalendar/WeekCalendar";
import {TruckProposalForm} from "./components/TruckProposalForm/TruckProposalForm";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TruckGroupList} from "./components/TruckGroupList/TruckGroupList";
import {TruckGroupType} from "./state/truck-groups-reducer";



function App() {
    let today = new Date()
    let [currentDate, setCurrentDate] = useState<Date>(today)
    const isTruckProposalModalActive = useSelector<AppRootStateType, boolean>(state =>  state.truckProposalModal.isModalActive)
    const truckGroups = useSelector<AppRootStateType, Array<TruckGroupType>>(state =>  state.truckGroups)

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
    let [activeTruckProposalForm, setActiveTruckProposalForm] = useState<boolean>(true)
    let [newModalIsOpen, setNewModalIsOpen] = useState<boolean>(false)

    return (
        <div className="App">
            <header className={'page-header'}>

            </header>
            <main className={'main'}>

                <div className={'sidebar'}>
                    {isTruckProposalModalActive && <TruckProposalForm/>}
                    <TruckProposalForm/>
                    <Calendar className={'react-calendar'} onChange={onCalendarChange}/>
                    {/*<TruckCards/>*/}
                    {/*<NewModal title={'New title'}*/}
                    {/*          isOpen={newModalIsOpen}*/}
                    {/*          onCancel={()=> setNewModalIsOpen(false)}*/}
                    {/*          onSubmit={()=> setNewModalIsOpen(false)}>*/}
                    {/*    <p>Some text</p>*/}
                    {/*</NewModal>*/}
                    {/*<button onClick={()=>setNewModalIsOpen(true)}>*/}
                    {/*    Open New Modal*/}
                    {/*</button>*/}
                    <TruckGroupList truckGroups={truckGroups}/>
                </div>
                <WeekCalendar weekDays={weekDays}/>
            </main>
        </div>
    );
}

export default App;
