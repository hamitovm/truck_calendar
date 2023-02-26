import {
    Checkbox,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {KeyboardArrowRight, KeyboardArrowUp, StarBorder} from "@mui/icons-material";
import {useState} from "react";
import {TruckGroupType} from "../../state/truck-groups-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {TruckProposalsType} from "../../state/truck-proposals-reducer";
import {changeTruckCardShowValueByGroupIdAC, TruckType} from "../../state/truck-cards-reducer";
import {TruckGroupElementInner} from "./TruckGroupElementInner";
import {useAppDispatch} from "../../state/hooks";

type TruckGroupElementType = {
    truckGroup: TruckGroupType
}

export const TruckGroupElement = (props: TruckGroupElementType) => {
    const dispatch = useAppDispatch()
    // let [groupChecked, setGroupChecked] = useState<boolean>(true)
    let [isOpen, setIsOpen] = useState<boolean>(false)
    const labelId = `checkbox-list-label-${props.truckGroup.id}`;
    let trucks = useSelector<AppRootStateType, Array<TruckType>>(state => state.truckCards).filter(el => el.truckGroupId === props.truckGroup.id)


    const checkTrucksShowValue = (trucks: Array<TruckType>, truckGroupId: string) => {
        let trucksInGroup = 0
        let trucksToShow = 0
        trucks.forEach(el => {
            el.truckGroupId === truckGroupId && trucksInGroup++
            el.truckGroupId === truckGroupId && el.showInCalendar && trucksToShow++
        })
        if (trucksToShow === 0) {
            return false
        } else if (trucksToShow === trucksInGroup) {
            return true
        } else return undefined
    }
    const groupChecked: boolean | undefined = checkTrucksShowValue(trucks, props.truckGroup.id)
    const onCheckBoxChange = () => {
        dispatch(changeTruckCardShowValueByGroupIdAC(props.truckGroup.id, !groupChecked))
    }
    return (
        <div key={props.truckGroup.id}>
            <ListItem secondaryAction={

                <ListItemIcon>
                    <Checkbox edge={'end'} checked={groupChecked} indeterminate={groupChecked === undefined} onChange={onCheckBoxChange}/>
                </ListItemIcon>
            }
                      disablePadding
            >
                <ListItemButton role={undefined}
                                onClick={() => setIsOpen(!isOpen)}
                                dense>
                    <IconButton edge="start" aria-label="open">
                        {isOpen ? <KeyboardArrowUp/> : <KeyboardArrowRight/>}
                    </IconButton>
                    <ListItemText id={labelId} primary={`${props.truckGroup.title}`}/>
                </ListItemButton>

            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {trucks.map(el => {
                    return (
                        <TruckGroupElementInner truck={el} key={el.id}/>
                    )
                })}
            </Collapse>
        </div>
    )
}