import {Checkbox, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {StarBorder} from "@mui/icons-material";
import {changeTruckCardShowValueByTruckIdAC, TruckType} from "../../state/truck-cards-reducer";
import {useAppDispatch} from "../../state/hooks";

export type TruckGroupElementInnerType = {
    truck: TruckType
}

export const TruckGroupElementInner = (props: TruckGroupElementInnerType) => {
    const dispatch = useAppDispatch()
    const onCheckboxChange = () => {
        dispatch(changeTruckCardShowValueByTruckIdAC(props.truck.id, !props.truck.showInCalendar))
    }
    return (
        <List component="div"
              disablePadding
        >
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={props.truck.title} />
                <Checkbox edge={'end'} checked={props.truck.showInCalendar} onChange={onCheckboxChange}/>
            </ListItemButton>
        </List>
    )
}