import {TruckGroupList} from "./TruckGroupList/TruckGroupList";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {TruckGroupType} from "../../state/truck-groups-reducer";
import {Checkbox, List, ListItemButton, ListItemText} from "@mui/material";
import {useAppDispatch} from "../../state/hooks";
import {changeShowNewProposalsValueAC, changeShowRejectedProposalsValueAC} from "../../state/proposals-filter-reducer";

type SideBarFiltersType = {

}

export const SideBarFilters = (props: SideBarFiltersType) => {
    const dispatch = useAppDispatch()
    const truckGroups = useSelector<AppRootStateType, Array<TruckGroupType>>(state =>  state.truckGroups)
    const showNewProposals = useSelector<AppRootStateType, boolean>(state =>  state.proposalsFilter.showNewProposals)
    const showRejectedProposals = useSelector<AppRootStateType, boolean>(state =>  state.proposalsFilter.showRejectedProposals)
    const showHideNewProposals = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeShowNewProposalsValueAC(event.target.checked))
    }
    const showHideRejectedProposals = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeShowRejectedProposalsValueAC(event.target.checked))
    }
    return (
        <div>
            <h3>Filters</h3>
            <List component="div"
                  disablePadding
            >
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={'Новые заявки'} />
                    <Checkbox edge={'end'} checked={showNewProposals} onChange={showHideNewProposals}/>
                </ListItemButton>
            </List>
            <List component="div"
                  disablePadding
            >
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={'Отклоненные заявки'} />
                    <Checkbox edge={'end'} checked={showRejectedProposals} onChange={showHideRejectedProposals}/>
                </ListItemButton>
            </List>
            <TruckGroupList truckGroups={truckGroups}/>
        </div>
    )
}