import {v1} from "uuid";
import {truckId1, truckId2, truckId3, truckId4, truckId5, truckId6, truckId7, truckId8, truckId9} from "./truck-cards-reducer";
import {departmentId1, departmentId2, departmentId3, departmentId4, departmentId5, departmentId6, departmentId7, departmentId8} from "./departments-reducer";
import {getDayMonthYear} from "../helpers/helpers";

const createDates = (month: number) => {
    let dates = []
    for (let i = 1; i < 31; i++) {
        dates.push(new Date(2023, month, i))
    }
    return dates
}

const allJanDates = createDates(0)


export type TruckProposalType = {
    id: string
    addedDate: Date
    description: string
    truckId: string
    driver: null | string
    departmentId: string
    status: ProposalStatuses
    highPriority: boolean
}

export type TruckProposalsType = {
    [key: string]: Array<TruckProposalType>
}

export type ProposalStatuses = "new" | "accepted" | 'rejected'
// Заявки id
export const truckProposalId1 = v1()
export const truckProposalId2 = v1()
export const truckProposalId3 = v1()
export const truckProposalId4 = v1()
export const truckProposalId5 = v1()
export const truckProposalId6 = v1()
export const truckProposalId7 = v1()
export const truckProposalId8 = v1()
export const truckProposalId9 = v1()
export const truckProposalId10 = v1()
export const truckProposalId11 = v1()
export const truckProposalId12 = v1()
export const truckProposalId13 = v1()
export const truckProposalId14 = v1()
export const truckProposalId15 = v1()
export const truckProposalId16 = v1()
export const truckProposalId17 = v1()
export const truckProposalId18 = v1()
export const truckProposalId19 = v1()
export const truckProposalId20 = v1()
export const truckProposalId21 = v1()
export const truckProposalId22 = v1()
export const truckProposalId23 = v1()
export const truckProposalId24 = v1()
export const truckProposalId25 = v1()
export const truckProposalId26 = v1()
export const truckProposalId27 = v1()
export const truckProposalId28 = v1()
export const truckProposalId29 = v1()
export const truckProposalId30 = v1()
export const truckProposalId31 = v1()
export const truckProposalId32 = v1()
export const truckProposalId33 = v1()
export const truckProposalId34 = v1()
export const truckProposalId35 = v1()
export const truckProposalId36 = v1()
export const truckProposalId37 = v1()
export const truckProposalId38 = v1()
export const truckProposalId39 = v1()
export const truckProposalId40 = v1()


export const truckProposalsInitialState: TruckProposalsType = {
    [getDayMonthYear(allJanDates[1])]: [
        {
            id: truckProposalId1,
            addedDate: allJanDates[0],
            description: 'Вырубка',
            truckId: truckId1,
            driver: null,
            departmentId: departmentId1,
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId2,
            addedDate: allJanDates[0],
            description: 'Вырубка',
            truckId: truckId3,
            driver: null,
            departmentId: departmentId1,
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId3,
            addedDate: allJanDates[0],
            description: 'Вырубка',
            truckId: truckId3,
            driver: null,
            departmentId: departmentId3,
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId4,
            addedDate: allJanDates[0],
            description: 'Вырубка',
            truckId: truckId7,
            driver: null,
            departmentId: departmentId5,
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId5,
            addedDate: allJanDates[0],
            description: 'Вырубка',
            truckId: truckId8,
            driver: null,
            departmentId: departmentId6,
            status: "new",
            highPriority: false
        }
    ],
    [getDayMonthYear(allJanDates[2])]: [
        {
            id: truckProposalId10, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId11, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId12, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId8, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId13, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId3, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId14, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId3, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId15, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId16, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId9, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId17, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId7, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId18, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId7, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId19, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId8, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId20, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId5, /*Транспорт*/
            driver: null,
            departmentId: departmentId8, /*РЭС*/
            status: "new",
            highPriority: false
        },
    ],
    [getDayMonthYear(allJanDates[3])]: [
        {
            id: truckProposalId21, /*айди*/
            addedDate: allJanDates[2], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId4, /*Транспорт*/
            driver: null,
            departmentId: departmentId4, /*РЭС*/
            status: "new",
            highPriority: false
        }
    ],
    [getDayMonthYear(allJanDates[4])]: [
        {
            id: truckProposalId22, /*айди*/
            addedDate: allJanDates[3], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId23, /*айди*/
            addedDate: allJanDates[3], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId3, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId24, /*айди*/
            addedDate: allJanDates[3], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId4, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId25, /*айди*/
            addedDate: allJanDates[3], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId6, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId26, /*айди*/
            addedDate: allJanDates[3], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId4, /*Транспорт*/
            driver: null,
            departmentId: departmentId7, /*РЭС*/
            status: "new",
            highPriority: false
        },
    ],
    [getDayMonthYear(allJanDates[5])]: [
        {
            id: truckProposalId27, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId2, /*РЭС*/
            status: "new",
            highPriority: false
        }
    ],
    [getDayMonthYear(allJanDates[6])]: [
        {
            id: truckProposalId28, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId4, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId29, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId8, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId30, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId3, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId31, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId4, /*Транспорт*/
            driver: null,
            departmentId: departmentId4, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId32, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId33, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId7, /*РЭС*/
            status: "new",
            highPriority: false
        },
    ],
    [getDayMonthYear(allJanDates[7])]: [

    ],
    [getDayMonthYear(allJanDates[8])]: [
        {
            id: truckProposalId6,
            addedDate: allJanDates[1],
            description: 'Вырубка',
            truckId: truckId5,
            driver: null,
            departmentId: departmentId2,
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId7, /*айди*/
            addedDate: allJanDates[1], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId8, /*айди*/
            addedDate: allJanDates[1], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId7, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId9, /*айди*/
            addedDate: allJanDates[1], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId3, /*Транспорт*/
            driver: null,
            departmentId: departmentId8, /*РЭС*/
            status: "new",
            highPriority: false
        },
    ],
    [getDayMonthYear(allJanDates[9])]: [
        {
            id: truckProposalId34, /*айди*/
            addedDate: allJanDates[7], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId1, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId35, /*айди*/
            addedDate: allJanDates[7], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId4, /*Транспорт*/
            driver: null,
            departmentId: departmentId2, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId36, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId6, /*Транспорт*/
            driver: null,
            departmentId: departmentId2, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId5, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId1, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId37, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId2, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId38, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId8, /*Транспорт*/
            driver: null,
            departmentId: departmentId5, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId39, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId7, /*Транспорт*/
            driver: null,
            departmentId: departmentId6, /*РЭС*/
            status: "new",
            highPriority: false
        },
        {
            id: truckProposalId40, /*айди*/
            addedDate: allJanDates[5], /*Дата*/
            description: 'Вырубка', /*Причина*/
            truckId: truckId9, /*Транспорт*/
            driver: null,
            departmentId: departmentId8, /*РЭС*/
            status: "new",
            highPriority: false
        }
    ],
    [getDayMonthYear(allJanDates[10])]: [

    ],
}

export type TruckProposalsActionType = DeleteTruckProposalACType
    | AddTruckProposalACType
    | UpdateProposalTruckACType
    | UpdateProposalDescriptionACType
    | UpdateProposalDateACType
    | SetHighPriorityACType
    | SetLowPriorityACType
    | ChangeDriverACType
    | AcceptTruckProposalACType
    | RejectTruckProposalACType
    | ChangeTruckProposalStatusToNewACType


type DeleteTruckProposalACType = {
    type: 'DELETE_TRUCK_PROPOSAL',
    date: string,
    truckProposalId: string,
}
type AddTruckProposalACType = {
    type: 'ADD_TRUCK_PROPOSAL',
    date: string,
    description: string,
    truckId: string,
    driver: null | string,
    departmentId: string,
    highPriority: boolean
}
type UpdateProposalTruckACType = {
    type: 'UPDATE_PROPOSAL_TRUCK',
    date: string,
    truckProposalId: string,
    newTruckId: string
}
type UpdateProposalDescriptionACType = {
    type: 'UPDATE_PROPOSAL_DESCRIPTION',
    date: string,
    truckProposalId: string,
    newDescription: string
}
type UpdateProposalDateACType = {
    type: 'UPDATE_PROPOSAL_DATE',
    date: string,
    truckProposalId: string,
    newDate: string
}
type SetHighPriorityACType = {
    type: 'SET_HIGH_PRIORITY',
    date: string,
    truckProposalId: string,
}
type SetLowPriorityACType = {
    type: 'SET_LOW_PRIORITY',
    date: string,
    truckProposalId: string,
}
type ChangeDriverACType = {
    type: 'CHANGE_DRIVER',
    date: string,
    truckProposalId: string,
    driver: string | null,
}
type AcceptTruckProposalACType = {
    type: 'ACCEPT_TRUCK_PROPOSAL',
    date: string,
    truckProposalId: string
}
type RejectTruckProposalACType = {
    type: 'REJECT_TRUCK_PROPOSAL',
    date: string,
    truckProposalId: string
}
type ChangeTruckProposalStatusToNewACType = {
    type: 'CHANGE_TRUCK_PROPOSAL_STATUS_TO_NEW',
    date: string,
    truckProposalId: string
}

//Action creators==========================================
export const deleteTruckProposalAC = (date: string, truckProposalId: string): DeleteTruckProposalACType => ({
    type: 'DELETE_TRUCK_PROPOSAL',
    date,
    truckProposalId,
})
export const addTruckProposalAC = (date: string,
                                   description: string,
                                   truckId: string,
                                   driver: null | string,
                                   departmentId: string,
                                   highPriority: boolean): AddTruckProposalACType => ({
    type: 'ADD_TRUCK_PROPOSAL',
    date,
    description,
    truckId,
    driver,
    departmentId,
    highPriority
})
export const updateProposalTruckAC = (date: string, truckProposalId: string, newTruckId: string): UpdateProposalTruckACType => ({
    type: 'UPDATE_PROPOSAL_TRUCK',
    date,
    truckProposalId,
    newTruckId
})
export const updateProposalDescriptionAC = (date: string,
                                            truckProposalId: string,
                                            newDescription: string): UpdateProposalDescriptionACType => ({
    type: 'UPDATE_PROPOSAL_DESCRIPTION',
    date,
    truckProposalId,
    newDescription
})
export const updateProposalDateAC = (date: string,
                                            truckProposalId: string,
                                            newDate: string): UpdateProposalDateACType => ({
    type: 'UPDATE_PROPOSAL_DATE',
    date,
    truckProposalId,
    newDate
})
export const setHighPriorityAC = (date: string, truckProposalId: string): SetHighPriorityACType => ({
    type: 'SET_HIGH_PRIORITY',
    date,
    truckProposalId
})
export const setLowPriorityAC = (date: string, truckProposalId: string): SetLowPriorityACType => ({
    type: 'SET_LOW_PRIORITY',
    date,
    truckProposalId
})
export const changeDriverAC = (date: string,truckProposalId: string, driver: string | null): ChangeDriverACType => ({
    type: "CHANGE_DRIVER",
    date,
    truckProposalId,
    driver
})
export const acceptTruckProposalAC = (date: string,truckProposalId: string): AcceptTruckProposalACType => ({
    type: "ACCEPT_TRUCK_PROPOSAL",
    date,
    truckProposalId
})
export const rejectTruckProposalAC = (date: string,truckProposalId: string): RejectTruckProposalACType => ({
    type: "REJECT_TRUCK_PROPOSAL",
    date,
    truckProposalId
})
export const changeTruckProposalStatusToNewAC = (date: string,truckProposalId: string): ChangeTruckProposalStatusToNewACType => ({
    type: "CHANGE_TRUCK_PROPOSAL_STATUS_TO_NEW",
    date,
    truckProposalId
})


//============ REDUCER
export const truckProposalsReducer = (state: TruckProposalsType = truckProposalsInitialState, action: TruckProposalsActionType): TruckProposalsType => {
    switch (action.type) {
        case 'DELETE_TRUCK_PROPOSAL':
            return {
                ...state,
                [action.date]: [...state[action.date].filter(el => el.id !== action.truckProposalId)]
            }
        case 'ADD_TRUCK_PROPOSAL':
            console.log(action.truckId + ' truckId')
            console.log(action.type + ' type')
            console.log(action.date + ' date')
            console.log(action.driver + ' driver')
            console.log(action.departmentId + ' departmentId')
            console.log(action.description + ' description')
            console.log(action.highPriority + ' highPriority')
            let newProposal: TruckProposalType = {
                id: v1(), /*айди*/
                addedDate: new Date(), /*Дата*/
                description: action.description, /*Причина*/
                truckId: action.truckId, /*Транспорт*/
                driver: action.driver,
                departmentId: action.departmentId, /*РЭС*/
                status: "new",
                highPriority: action.highPriority
            }
            let proposals = state[action.date] && [...state[action.date]]
            return proposals ? {
                ...state,
                [action.date]: [...proposals, newProposal]
            } : {
                ...state,
                [action.date]: [newProposal]

            }
        case 'UPDATE_PROPOSAL_TRUCK':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            addedDate: new Date(),
                            truckId: action.newTruckId
                        } : el
                })]
            }
        case 'UPDATE_PROPOSAL_DESCRIPTION':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            addedDate: new Date(),
                            description: action.newDescription
                        } : el
                })]
            }
        case 'UPDATE_PROPOSAL_DATE':
            let proposalToChange: TruckProposalType | undefined = state[action.date].find(el => el.id === action.truckProposalId)
            let newState: TruckProposalsType = state[action.newDate] ?
                {
                ...state,
                [action.newDate]: proposalToChange ? [...state[action.newDate], {...proposalToChange,
                    addedDate: new Date()}] : [...state[action.newDate]],
                [action.date]: [...state[action.date].filter(el => el.id !== action.truckProposalId)]
            } : {
                ...state,
                [action.newDate]: proposalToChange ? [{...proposalToChange,
                    addedDate: new Date()}] : [],
                [action.date]: [...state[action.date].filter(el => el.id !== action.truckProposalId)]
            }
            return newState
        case 'SET_HIGH_PRIORITY':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            highPriority: true
                        } : el
                })]
            }
        case 'SET_LOW_PRIORITY':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            highPriority: false
                        } : el
                })]
            }
        case 'CHANGE_DRIVER':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            driver: action.driver
                        } : el
                })]
            }
        case 'ACCEPT_TRUCK_PROPOSAL':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            status: <ProposalStatuses>'accepted'
                        } : el
                })]
            }
        case 'REJECT_TRUCK_PROPOSAL':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            status: <ProposalStatuses>'rejected'
                        } : el
                })]
            }
        case 'CHANGE_TRUCK_PROPOSAL_STATUS_TO_NEW':
            return {
                ...state,
                [action.date]: [...state[action.date].map(el => {
                    return el.id === action.truckProposalId ?
                        {
                            ...el,
                            status: <ProposalStatuses>'new'
                        } : el
                })]
            }
        default:
            return state
    }
}





