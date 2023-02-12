import {v1} from 'uuid'
import {TruckType} from "./truck-cards-reducer";

export type TruckGroupType = {
    id: string
    title: string
    order: number | null
}

export let truckGroupId1 = v1()
export let truckGroupId2 = v1()
export let truckGroupId3 = v1()
export let truckGroupId4 = v1()


export const truckGroupsInitialState: Array<TruckGroupType> = [
    {
        id: truckGroupId1,
        title: 'РПН, вышки',
        order: 1
    },
    {
        id: truckGroupId2,
        title: 'КМУ',
        order: 2
    },
    {
        id: truckGroupId3,
        title: 'БКМ',
        order: 3
    },
    {
        id: truckGroupId4,
        title: 'остальное',
        order: null
    }
]

export type truckGroupsReducerActionType = DeleteTruckGroupActionType
    | AddTruckGroupActionType
    | ChangeTruckGroupTitleActionType
    | ChangeTruckGroupOrderActionType

export type DeleteTruckGroupActionType = ReturnType<typeof deleteTruckGroupAC>
export type AddTruckGroupActionType = ReturnType<typeof addTruckGroupAC>
export type ChangeTruckGroupTitleActionType = ReturnType<typeof changeTruckGroupTitleAC>
export type ChangeTruckGroupOrderActionType = ReturnType<typeof changeTruckGroupOrderAC>

export const deleteTruckGroupAC = (truckGroupId: string) => {
    return {
        type: "DELETE_TRUCK_GROUP",
        truckGroupId
    } as const
}

export const addTruckGroupAC = (title: string) => {
    return {
        type: "ADD_TRUCK_GROUP",
        title
    } as const
}

export const changeTruckGroupTitleAC = (truckGroupId: string, title: string) => {
    return {
        type: "CHANGE_TRUCK_GROUP_TITLE",
        truckGroupId,
        title
    } as const
}

export const changeTruckGroupOrderAC = (truckGroupId: string, order: number | null) => {
    return {
        type: "CHANGE_TRUCK_GROUP_ORDER",
        truckGroupId,
        order
    } as const
}

export const truckGroupsReducer = (state:  Array<TruckGroupType> = truckGroupsInitialState, action: truckGroupsReducerActionType): Array<TruckGroupType> => {
    switch (action.type) {
        case 'DELETE_TRUCK_GROUP':
            return state.filter(el => el.id !== action.truckGroupId)
        case 'ADD_TRUCK_GROUP':
            return [...state, {
                id: v1(),
                title: action.title,
                order: null
            }]
        case 'CHANGE_TRUCK_GROUP_TITLE':
            return state.map(el => el.id === action.truckGroupId ? {
                ...el,
                title: action.title
            } : el)
        case 'CHANGE_TRUCK_GROUP_ORDER':
            return state.map(el => el.id === action.truckGroupId ? {
                ...el,
                order: action.order
            } : el)
        default:
            return state
    }
}