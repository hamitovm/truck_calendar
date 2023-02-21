import React, {useState} from "react";
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {Cancel, CheckCircle, ContentCut, Delete, DeleteRounded} from "@mui/icons-material";
import {green, red} from "@mui/material/colors";
import {closeTruckProposalModalAC} from "../../state/truck-proposal-modal-reducer";
import {useAppDispatch} from "../../state/hooks";
import {
    acceptTruckProposalAC,
    changeTruckProposalStatusToNewAC, deleteTruckProposalAC,
    rejectTruckProposalAC
} from "../../state/truck-proposals-reducer";
import {getDayMonthYear} from "../../helpers/helpers";

type ProposalControlsType = {
    isOpen: boolean
    onCancel: () => void
    acceptProposal:() => void
    rejectProposal:() => void
    deleteProposal:() => void
    anchorEl: null | HTMLElement
}
export const ProposalControls = (props: ProposalControlsType) => {

    return (
        <div>
            {props.isOpen &&
                <div className={'chip-controls'} onClick={props.onCancel}>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={props.anchorEl}
                        open={props.isOpen}
                        onClose={props.onCancel}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={props.acceptProposal}>
                            <ListItemIcon>
                                <CheckCircle fontSize="small" sx={{ color: green[700] }}/>
                            </ListItemIcon>
                            <ListItemText>Принять заявку</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={props.rejectProposal}>
                            <ListItemIcon>
                                <Cancel fontSize="small" sx={{ color: red[600] }} />
                            </ListItemIcon>
                            <ListItemText>Отклонить заявку</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={props.deleteProposal}>
                            <ListItemIcon>
                                <Delete fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Удалить заявку</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>}
        </div>

    )
}