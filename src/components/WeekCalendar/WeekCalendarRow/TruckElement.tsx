import {
    acceptTruckProposalAC,
    deleteTruckProposalAC,
    rejectTruckProposalAC,
    TruckProposalType
} from "../../../state/truck-proposals-reducer";
import {truckListInitialState} from "../../../state/truck-cards-reducer";
import {Chip, Tooltip} from "@mui/material";
import React, {useState} from "react";
import {ProposalControls} from "../../ProposalControls/ProposalControls";
import {useAppDispatch} from "../../../state/hooks";
import {getDayMonthYear} from "../../../helpers/helpers";

export type TruckElementPropsType = {
    proposal: TruckProposalType
    date: Date
}

export const TruckElement = (props: TruckElementPropsType) => {
    const truck = truckListInitialState.find(el => el.id === props.proposal.truckId)
    let [chipContropOpen, setChipContropOpen] = useState<boolean>(false)
    let [chipColor, setChipColor] = useState<"default" | "info" | "success" | "error" | "primary" | "secondary" | "warning" | undefined>('default')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const onChipClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
        setChipContropOpen(true)
    }

    const dispatch = useAppDispatch()
    const acceptProposal = () => {
        dispatch(acceptTruckProposalAC(getDayMonthYear(props.date), props.proposal.id))
        setChipColor('success')
        handleClose()

    }
    const rejectProposal = () => {
        dispatch(rejectTruckProposalAC(getDayMonthYear(props.date), props.proposal.id))
        setChipColor('error')
        handleClose()
    }
    const deleteProposal = () => {
        dispatch(deleteTruckProposalAC(getDayMonthYear(props.date), props.proposal.id))
        handleClose()
    }

    const handleClose = () => {
        setAnchorEl(null)
        setChipContropOpen(false)
    }

    return (
        <div className={'truck-proposal__element'}>
            <Tooltip title={props.proposal.description} placement="top-start">
                <Chip label={truck && truck.title}
                      color={chipColor}
                      variant="outlined"
                      size="small"
                      onClick={onChipClick}
                      className={'truck-proposal__chip'}/>
            </Tooltip>
            <ProposalControls isOpen={chipContropOpen}
                              onCancel={handleClose}
                              acceptProposal={acceptProposal}
                              rejectProposal={rejectProposal}
                              deleteProposal={deleteProposal}
                              anchorEl={anchorEl}/>
        </div>

    )
}