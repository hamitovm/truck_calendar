import {deleteTruckCardAC} from "./truck-cards-reducer";

export type ProposalsFilterType = {
    showRejectedProposals: boolean
    showNewProposals: boolean
    groupsNotToShow: Array<string>
    trucksNotToShow: Array<string>
}

export const ProposalsFilterInitialState = {
    showRejectedProposals: false,
    showNewProposals: true,
    groupsNotToShow: [],
    trucksNotToShow: []
}

export type ProposalsFilterActionType = ChangeShowRejectedProposalsValueActionType
    | ChangeShowNewProposalsValueActionType
    | AddNotToShowGroupActionType
    | DeleteNotToShowGroupActionType
    | AddNotToShowTruckActionType
    | DeleteNotToShowTruckActionType

export type ChangeShowRejectedProposalsValueActionType = ReturnType<typeof changeShowRejectedProposalsValueAC>
export type ChangeShowNewProposalsValueActionType = ReturnType<typeof changeShowNewProposalsValueAC>
export type AddNotToShowGroupActionType = ReturnType<typeof addNotToShowGroupAC>
export type DeleteNotToShowGroupActionType = ReturnType<typeof deleteNotToShowGroupAC>
export type AddNotToShowTruckActionType = ReturnType<typeof addNotToShowTruckAC>
export type DeleteNotToShowTruckActionType = ReturnType<typeof deleteNotToShowTruckAC>

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
export const addNotToShowGroupAC = (groupId: string) => {
    return {
        type: "ADD_NOT_TO_SHOW_GROUP",
        groupId
    } as const
}
export const deleteNotToShowGroupAC = (groupId: string) => {
    return {
        type: "DELETE_NOT_TO_SHOW_GROUP",
        groupId
    } as const
}
export const addNotToShowTruckAC = (truckId: string) => {
    return {
        type: "ADD_NOT_TO_SHOW_TRUCK",
        truckId
    } as const
}
export const deleteNotToShowTruckAC = (truckId: string) => {
    return {
        type: "DELETE_NOT_TO_SHOW_TRUCK",
        truckId
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
        case "ADD_NOT_TO_SHOW_GROUP":
            return {
                ...state,
                groupsNotToShow: [...state.groupsNotToShow, action.groupId]
            }
        case "DELETE_NOT_TO_SHOW_GROUP":
            return {
                ...state,
                groupsNotToShow: state.groupsNotToShow.filter(el => el !== action.groupId)
            }
        case "ADD_NOT_TO_SHOW_TRUCK":
            return {
                ...state,
                trucksNotToShow: [...state.trucksNotToShow, action.truckId]
            }
        case "DELETE_NOT_TO_SHOW_TRUCK":
            return {
                ...state,
                trucksNotToShow: state.trucksNotToShow.filter(el => el !== action.truckId)
            }
        default:
            return state
    }

}