import {TruckProposalForm} from "../TruckProposalForm/TruckProposalForm";
import Calendar from "react-calendar";
import {SideBarFilters} from "./SideBarFilters";
import React from "react";

type SidebarPropsType = {
    isTruckProposalModalActive: boolean
    onCalendarChange: (date: Date) => void
}

export const SideBar = (props: SidebarPropsType) => {
    return (
        <div>
            <div className={'sidebar'}>
                {props.isTruckProposalModalActive && <TruckProposalForm/>}
                <TruckProposalForm/>
                <Calendar className={'react-calendar'} onChange={props.onCalendarChange}/>
                <SideBarFilters />
            </div>
        </div>
    )
}