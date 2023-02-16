import React from "react";

export type NewModalPropsType = {
    title: string
    isOpen: boolean
    onCancel: ()=> void
    onSubmit:()=> void
    children: React.ReactNode
}


export const NewModal = (props: NewModalPropsType) => {
    return (
        <div>

        </div>
    )
}