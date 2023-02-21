import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Button, IconButton} from "@mui/material";

export type NewModalPropsType = {
    title: string
    isOpen: boolean
    onCancel: ()=> void
    onSubmit?: ()=> void
    children: React.ReactNode
}


export const NewModal = (props: NewModalPropsType) => {
    return (
        <div>
            {props.isOpen &&
                <div className={'modal__overlay'} onClick={props.onCancel}>
                    <div className={'modal_content-wrapper'} onClick={e => e.stopPropagation()}>
                        <div className={'modal1__content'}>
                            <h3 className={'modal__header'}>
                                {props.title}
                            </h3>
                            <div className={'modal__close-icon'} >
                                <IconButton onClick={props.onCancel} size={'small'}>
                                    <CloseRoundedIcon fontSize="small"/>
                                </IconButton>
                            </div>
                            <div className={'modal__body'}>
                                {props.children}
                            </div>
                            <div className={'modal__footer'}>
                            </div>
                        </div>
                    </div>

                </div>}
        </div>

    )
}