import {v1} from 'uuid'
import {
    addDepartmentAC, changeFullNameDepartmentAC,
    changeShortNameDepartmentAC, departmentsInitialState, departmentsReducerActionType, DepartmentType,
    returnFromArchiveDepartmentAC,
    sendToArchiveDepartmentAC, setOrderDepartmentAC
} from "./departments-reducer";

export type TruckType = {
    id: string
    title: string
    truckGroupId: string | null
    stateNumber: string
    description: string | null
    truckLocation: string
    // readyToGo: boolean
    // failureCause: null | string
    archived: boolean
}

export let truckId1 = v1()
export let truckId2 = v1()
export let truckId3 = v1()
export let truckId4 = v1()
export let truckId5 = v1()
export let truckId6 = v1()
export let truckId7 = v1()
export let truckId8 = v1()
export let truckId9 = v1()
export let truckId10 = v1()
export let truckGroupId1 = v1()
export let truckGroupId2 = v1()
export let truckGroupId3 = v1()
export let truckGroupId4 = v1()


export const truckListInitialState: Array<TruckType> = [
    {
        id: truckId1,
        title: 'АГПИ',
        truckGroupId: truckGroupId1,
        stateNumber: 'А637АА716',
        description: '',
        truckLocation: 'ЗРЭС',
        archived: false
    },
    {
        id: truckId2,
        title: 'АГПИ(Isuzu)',
        truckGroupId: truckGroupId1,
        stateNumber: 'Н606АА716',
        description: '',
        truckLocation: 'ВРЭС',
        archived: false
    },
    {
        id: truckId3,
        title: 'БМ',
        truckGroupId: truckGroupId3,
        stateNumber: 'Н7899АА716',
        description: '',
        truckLocation: 'ЛРЭС',
        archived: false
    },
    {
        id: truckId4,
        title: 'БКМ',
        truckGroupId: truckGroupId3,
        stateNumber: 'К211ММ716',
        description: '',
        truckLocation: 'АРЭС',
        archived: false
    },
    {
        id: truckId5,
        title: 'КМУ',
        truckGroupId: truckGroupId3,
        stateNumber: 'У911НН716',
        description: '',
        truckLocation: 'ПРЭС',
        archived: false
    },
    {
        id: truckId6,
        title: 'АГП',
        truckGroupId: truckGroupId2,
        stateNumber: 'А111ВВ716',
        description: '',
        truckLocation: 'РРЭС',
        archived: false
    },
    {
        id: truckId7,
        title: 'БКМИ',
        truckGroupId: truckGroupId3,
        stateNumber: 'М530АА716',
        description: '',
        truckLocation: 'АРЭС',
        archived: false
    },
    {
        id: truckId8,
        title: 'Т-150',
        truckGroupId: truckGroupId3,
        stateNumber: 'Х777АА716',
        description: '',
        truckLocation: 'БРЭС',
        archived: false
    },
    {
        id: truckId9,
        title: 'Камаз бортовой',
        truckGroupId: truckGroupId4,
        stateNumber: 'В012ККА716',
        description: '',
        truckLocation: 'АРЭС',
        archived: false
    },
    {
        id: truckId10,
        title: 'Лафет',
        truckGroupId: truckGroupId4,
        stateNumber: 'О8675УУ716',
        description: '',
        truckLocation: 'РРЭС',
        archived: false
    }
]

export type ProposalStatuses = "ready" | "accepted" | 'rejected'

export type truckCardsReducerActionType = DeleteTruckCardActionType
    | AddTruckCardActionType
    | ChangeTruckCardGroupActionType
    | ChangeTruckCardTitleActionType
    | ChangeTruckCardStateNumberActionType
    | ChangeTruckCardLocationActionType
    | ChangeTruckCardArchivedValueActionType

export type DeleteTruckCardActionType = ReturnType<typeof deleteTruckCardAC>
export type AddTruckCardActionType = ReturnType<typeof addTruckCardAC>
export type ChangeTruckCardGroupActionType = ReturnType<typeof changeTruckCardGroupAC>
export type ChangeTruckCardTitleActionType = ReturnType<typeof changeTruckCardTitleAC>
export type ChangeTruckCardStateNumberActionType = ReturnType<typeof changeTruckCardStateNumberAC>
export type ChangeTruckCardLocationActionType = ReturnType<typeof changeTruckCardLocationAC>
export type ChangeTruckCardArchivedValueActionType = ReturnType<typeof changeTruckCardArchivedValueAC>
// export type SetTruckNotReadyToGoActionType = ReturnType<typeof setTruckNotReadyToGoAC>
// export type SetTruckReadyToGoActionType = ReturnType<typeof setTruckReadyToGoAC>
// export type ChangeTruckFailureCauseToGoActionType = ReturnType<typeof changeTruckFailureCauseToGoAC>

export const deleteTruckCardAC = (truckId: string) => {
    return {
        type: "DELETE_TRUCK_CARD",
        truckId
    } as const
}
export const addTruckCardAC = (title: string,
                               truckGroupId: string,
                               stateNumber: string,
                               description: string | null,
                               truckLocation: string) => {
    return {
        type: "ADD_TRUCK_CARD",
        title,
        truckGroupId,
        stateNumber,
        description,
        truckLocation
    } as const
}
export const changeTruckCardGroupAC = (truckId: string,
                                       newTruckGroupId: string) => {
    return {
        type: "CHANGE_TRUCK_CARD_GROUP",
        truckId,
        newTruckGroupId
    } as const
}
export const changeTruckCardTitleAC = (truckId: string,
                                       newTitle: string) => {
    return {
        type: "CHANGE_TRUCK_CARD_TITLE",
        truckId,
        newTitle
    } as const
}
export const changeTruckCardStateNumberAC = (truckId: string,
                                             newStateNumber: string) => {
    return {
        type: "CHANGE_TRUCK_STATE_NUMBER",
        truckId,
        newStateNumber
    } as const
}
export const changeTruckCardLocationAC = (truckId: string,
                                          newLocation: string) => {
    return {
        type: "CHANGE_TRUCK_STATE_LOCATION",
        truckId,
        newLocation
    } as const
}
export const changeTruckCardArchivedValueAC = (truckId: string,
                                               archivedValue: boolean) => {
    return {
        type: "CHANGE_TRUCK_ARCHIVED_VALUE",
        truckId,
        archivedValue
    } as const
}
// export const setTruckNotReadyToGoAC = (truckId: string,
//                                        failureCause: string) => {
//     return {
//         type: "SET_TRUCK_NOT_READY_TO_GO",
//         truckId,
//         failureCause
//     } as const
// }
// export const setTruckReadyToGoAC = (truckId: string) => {
//     return {
//         type: "SET_TRUCK_READY_TO_GO",
//         truckId
//     } as const
// }
// export const changeTruckFailureCauseToGoAC = (truckId: string) => {
//     return {
//         type: "CHANGE_TRUCK_CARD_FAILURE_CAUSE",
//         truckId
//     } as const
// }

export const truckCardsReducer = (state:  Array<TruckType> = truckListInitialState, action: truckCardsReducerActionType): Array<TruckType> => {
    switch (action.type) {
        case "DELETE_TRUCK_CARD":
            return state.filter(el => el.id !== action.truckId)
        case "ADD_TRUCK_CARD":
            const newTruckCard: TruckType = {
                id: v1(),
                title: action.title,
                truckGroupId: action.truckGroupId,
                stateNumber: action.stateNumber,
                description: action.description,
                truckLocation: action.truckLocation,
                archived: false
            }
            return [
                ...state,
                newTruckCard
            ]
        case "CHANGE_TRUCK_CARD_GROUP":
            return state.map(el => el.id === action.truckId ? {
                ...el,
                truckGroupId: action.newTruckGroupId
            } : el
            )
        case 'CHANGE_TRUCK_CARD_TITLE':
            return state.map(el => el.id === action.truckId ? {
                    ...el,
                    title: action.newTitle
                } : el
            )
        case 'CHANGE_TRUCK_STATE_NUMBER':
            return state.map(el => el.id === action.truckId ? {
                    ...el,
                    stateNumber: action.newStateNumber
                } : el
            )
        case 'CHANGE_TRUCK_STATE_LOCATION':
            return state.map(el => el.id === action.truckId ? {
                    ...el,
                    truckLocation: action.newLocation
                } : el
            )
        case 'CHANGE_TRUCK_ARCHIVED_VALUE':
            return state.map(el => el.id === action.truckId ? {
                    ...el,
                    archived: action.archivedValue
                } : el
            )
        default:
            return state
    }
}
