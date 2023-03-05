import {Checkbox, List, ListItemButton, ListItemText} from "@mui/material";
import {TruckType} from "../../../state/truck-cards-reducer";
import {useAppDispatch} from "../../../state/hooks";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {addNotToShowTrucksAC, deleteNotToShowTrucksAC} from "../../../state/proposals-filter-reducer";

export type TruckGroupElementInnerType = {
    truck: TruckType
}

export const TruckGroupElementInner = (props: TruckGroupElementInnerType) => {
    const dispatch = useAppDispatch()
    const trucksNotToShow = useSelector<AppRootStateType, string[]>(state => state.proposalsFilter.trucksNotToShow)
    const truckCheckedValue = !trucksNotToShow.includes(props.truck.id)
    console.log(trucksNotToShow)
    const onCheckboxChange = () => {
        truckCheckedValue ? dispatch(addNotToShowTrucksAC([props.truck.id]))
            : dispatch(deleteNotToShowTrucksAC([props.truck.id]))
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