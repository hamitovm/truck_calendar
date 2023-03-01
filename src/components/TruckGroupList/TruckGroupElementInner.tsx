import {Checkbox, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {StarBorder} from "@mui/icons-material";
import {changeTruckCardShowValueByTruckIdAC, TruckType} from "../../state/truck-cards-reducer";
import {useAppDispatch} from "../../state/hooks";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ProposalsFilterType} from "../../state/proposals-filter-reducer";

export type TruckGroupElementInnerType = {
    truck: TruckType
}

export const TruckGroupElementInner = (props: TruckGroupElementInnerType) => {
    const dispatch = useAppDispatch()
    const proposalFilters = useSelector<AppRootStateType, ProposalsFilterType>(state => state.proposalsFilter)
    const truckCheckedValue = !proposalFilters.groupsNotToShow.includes(props.truck.truckGroupId) && !proposalFilters.trucksNotToShow.includes(props.truck.id)
    const onCheckboxChange = () => {
        // dispatch(changeTruckCardShowValueByTruckIdAC(props.truck.id, !props.truck.showInCalendar))
        // truckCheckedValue ? dispatch()
    }
    return (
        <List component="div"
              disablePadding
        >
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={props.truck.title} />
                <Checkbox edge={'end'} checked={truckCheckedValue} onChange={onCheckboxChange}/>
            </ListItemButton>
        </List>
    )
}