import React, {useState} from 'react';
import './App.scss';
import 'react-calendar/dist/Calendar.css';
import {WeekCalendar} from "./components/WeekCalendar/WeekCalendar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {SideBar} from "./components/Sidebar/Sidebar";
import {getCurrentWeekDays} from "./utils/utils";


function App() {
    let today = new Date()

    //Отображение модального окна для подачи новых заявок на транспорт
    const isTruckProposalModalActive = useSelector<AppRootStateType, boolean>(state => state.truckProposalModal.isModalActive)

    //Дни недели для отображения в календаре заявок, по дефолту отображается текущая неделя
    let [weekDays, setWeekDays] = useState<Date[]>(getCurrentWeekDays(today))

    //Изменение недели для отображения заявок в календаре транспорта
    const onCalendarChange = (date: Date) => {
        setWeekDays(getCurrentWeekDays(date))
    }
    return (
        <div className="App">
            <header className={'page-header'}>

            </header>
            <main className={'main'}>
                <SideBar isTruckProposalModalActive={isTruckProposalModalActive} onCalendarChange={onCalendarChange}/>
                <WeekCalendar weekDays={weekDays}/>
            </main>
        </div>
    );
}

export default App;
