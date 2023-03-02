import {deleteTruckCardAC} from "./truck-cards-reducer";

export type ProposalsFilterType = {
    showRejectedProposals: boolean
    showNewProposals: boolean
    trucksNotToShow: Array<string>
}

export const ProposalsFilterInitialState = {
    showRejectedProposals: false,
    showNewProposals: true,
    trucksNotToShow: []
}

export type ProposalsFilterActionType = ChangeShowRejectedProposalsValueActionType
    | ChangeShowNewProposalsValueActionType
    | AddNotToShowTrucksActionType
    | DeleteNotToShowTrucksActionType

export type ChangeShowRejectedProposalsValueActionType = ReturnType<typeof changeShowRejectedProposalsValueAC>
export type ChangeShowNewProposalsValueActionType = ReturnType<typeof changeShowNewProposalsValueAC>
export type AddNotToShowTrucksActionType = ReturnType<typeof addNotToShowTrucksAC>
export type DeleteNotToShowTrucksActionType = ReturnType<typeof deleteNotToShowTrucksAC>

export const changeShowRejectedProposalsValueAC = (newValue: boolean) => {
    return {
        type: "CHANGE_SHOW_REJECTED_PROPOSALS_VALUE",
        newValue
    } as const
}
export const changeShowNewProposalsValueAC = (newValue: boolean) => {
    return {
        type: "CHANGE_SHOW_NEW_PROPOSALS_VALUE",
        newValue
    } as const
}
export const addNotToShowTrucksAC = (trucksId: string[]) => {
    return {
        type: "ADD_NOT_TO_SHOW_TRUCKS",
        trucksId
    } as const
}
export const deleteNotToShowTrucksAC = (trucksId: string[]) => {
    return {
        type: "DELETE_NOT_TO_SHOW_TRUCKS",
        trucksId
    } as const
}

export const proposalsFilterReducer = (state: ProposalsFilterType = ProposalsFilterInitialState,
                                       action: ProposalsFilterActionType) : ProposalsFilterType => {
    switch (action.type) {
        case "CHANGE_SHOW_REJECTED_PROPOSALS_VALUE":
            return {
                ...state,
                showRejectedProposals: action.newValue
            }
        case "CHANGE_SHOW_NEW_PROPOSALS_VALUE":
            return {
                ...state,
                showNewProposals: action.newValue
            }
        case "ADD_NOT_TO_SHOW_TRUCKS":
            return {
                ...state,
                trucksNotToShow: [...state.trucksNotToShow, ...action.trucksId]
            }
        case "DELETE_NOT_TO_SHOW_TRUCKS":
            return {
                ...state,
                trucksNotToShow: state.trucksNotToShow.filter(el => !action.trucksId.includes(el))
            }
        default:
            return state
    }

}