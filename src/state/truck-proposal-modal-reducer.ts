import {DepartmentType} from "./departments-reducer";

export type TruckProposalModalStateType = {
    date: Date | null,
    department: DepartmentType | null,
    isModalActive: boolean
}

const TruckProposalModalInitialState: TruckProposalModalStateType = {
    date: null,
    department: null,
    isModalActive: false
}

export const truckProposalModalReducer = (state: TruckProposalModalStateType = TruckProposalModalInitialState, action: TruckProposalModalReducerActionType): TruckProposalModalStateType => {
    switch (action.type) {
        case 'OPEN_TRUCK_PROPOSAL_MODAL':
            // console.log('here')
            return {
                ...state,
                date: action.date,
                department: action.department,
                isModalActive: true
            }
        case 'CLOSE_TRUCK_PROPOSAL_MODAL':
            console.log('here');
            return {
                ...state,
                date: null,
                department: null,
                isModalActive: false
            }
        default:
            return {...state}
    }
}

export const openTruckProposalModalAC = (date: Date, department: DepartmentType) => ({
    type: 'OPEN_TRUCK_PROPOSAL_MODAL',
    date,
    department
} as const)

export const closeTruckProposalModalAC = () => ({
    type: 'CLOSE_TRUCK_PROPOSAL_MODAL',
} as const)

export type openTruckProposalModalActionType = ReturnType<typeof openTruckProposalModalAC>
export type closeTruckProposalModalActionType = ReturnType<typeof closeTruckProposalModalAC>

export type TruckProposalModalReducerActionType = openTruckProposalModalActionType | closeTruckProposalModalActionType
