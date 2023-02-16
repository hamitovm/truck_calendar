import React, {useState} from "react";
import './Modal.scss';

type ModalPropsType = {
    active: boolean,
    setActive: (value: boolean) => void
    children: React.ReactNode
}

export const Modal = (props: ModalPropsType) => {

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={'modal__content'} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )

}