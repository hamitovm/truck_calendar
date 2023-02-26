import {v1} from 'uuid'
import {
    addTruckGroupAC,
    changeTruckGroupOrderAC,
    changeTruckGroupTitleAC, deleteTruckGroupAC, truckGroupsReducer,
    TruckGroupType
} from "../truck-groups-reducer";
import {DepartmentType} from "../departments-reducer";



let truckGroupId1: string
let truckGroupId2: string
let truckGroupId3: string
let truckGroupId4: string




let startState: Array<TruckGroupType>

beforeEach(() => {
    truckGroupId1 = v1()
    truckGroupId2 = v1()
    truckGroupId3 = v1()
    truckGroupId4 = v1()

    startState = [
        {
            id: truckGroupId1,
            title: 'РПН, вышки',
            // order: 1
        },
        {
            id: truckGroupId2,
            title: 'КМУ',
            // order: 2
        },
        {
            id: truckGroupId3,
            title: 'БКМ',
            // order: 3
        },
        {
            id: truckGroupId4,
            title: 'остальное',
            // order: null
        }
    ]
})


test('correct truck group should be deleted', () => {
    const endState: Array<TruckGroupType> = truckGroupsReducer(startState, deleteTruckGroupAC(truckGroupId1))

    expect(endState.length).toBe(startState.length - 1)
    expect(endState[0].id).toBe(truckGroupId2)
})

test('correct truck group should be added', () => {
    const title = 'РПН АГПИ'

    const endState: Array<TruckGroupType> = truckGroupsReducer(startState, addTruckGroupAC(title))

    expect(endState.length).toBe(startState.length + 1)
    expect(endState[4].title).toBe(title)
})


test('correct truck group should change name', () => {
    const newTitle = 'Опоровозы'

    const endState: Array<TruckGroupType> = truckGroupsReducer(startState, changeTruckGroupTitleAC(truckGroupId1, newTitle))

    expect(endState.length).toBe(startState.length)
    expect(endState[0].title).toBe(newTitle)
})

// test('correct truck group should change order', () => {
//     const newOrder = 1
//     const endState: Array<TruckGroupType> = truckGroupsReducer(startState, changeTruckGroupOrderAC(truckGroupId2, newOrder))
//
//     expect(endState.length).toBe(startState.length)
//     expect(endState[1].order).toBe(newOrder)
// })