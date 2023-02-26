import {v1} from 'uuid'

import {
    addTruckCardAC,
    changeTruckCardArchivedValueAC,
    changeTruckCardGroupAC,
    changeTruckCardLocationAC,
    changeTruckCardShowValueByGroupIdAC,
    changeTruckCardShowValueByTruckIdAC,
    changeTruckCardStateNumberAC,
    changeTruckCardTitleAC,
    deleteTruckCardAC,
    truckCardsReducer,
    TruckType
} from "../truck-cards-reducer";
let proposalId1: string
let proposalId2: string
let proposalId3: string
let proposalId4: string
let truckId1: string
let truckId2: string
let truckId3: string
let truckId4: string
let truckGroupId1: string
let truckGroupId2: string
let truckGroupId3: string
let truckGroupId4: string


let startState: Array<TruckType>

beforeEach(() => {
    proposalId1 = v1()
    proposalId2 = v1()
    proposalId3 = v1()
    proposalId4 = v1()
    truckId1 = v1()
    truckId2 = v1()
    truckId3 = v1()
    truckId4 = v1()
    truckGroupId1 = v1()
    truckGroupId2 = v1()
    truckGroupId3 = v1()
    truckGroupId4 = v1()
    startState = [
        {
            id: truckId1,
            title: 'АГПИ',
            truckGroupId: truckGroupId1,
            stateNumber: 'А637АА716',
            description: '',
            truckLocation: 'ЗРЭС',
            archived: false,
            showInCalendar: true
        },
        {
            id: truckId2,
            title: 'АГПИ(Isuzu)',
            truckGroupId: truckGroupId1,
            stateNumber: 'Н606АА716',
            description: '',
            truckLocation: 'ВРЭС',
            archived: false,
            showInCalendar: true
        },
        {
            id: truckId3,
            title: 'БМ',
            truckGroupId: truckGroupId3,
            stateNumber: 'Н7899АА716',
            description: '',
            truckLocation: 'ЛРЭС',
            archived: false,
            showInCalendar: true
        },
        {
            id: truckId4,
            title: 'БКМ',
            truckGroupId: truckGroupId3,
            stateNumber: 'К211ММ716',
            description: '',
            truckLocation: 'АРЭС',
            archived: false,
            showInCalendar: false
        }]
})


test('correct truck card should be deleted', () => {
    const endState = truckCardsReducer(startState, deleteTruckCardAC(truckId1))
    expect(endState.length).toBe(startState.length - 1)
})


test('new truck card should be added', () => {
    const title = 'АГП'
    const truckGroupId = 'truckGroupId2'
    const description = null
    const truckLocation = 'ЗРЭС'
    const stateNumber = 'А777РМ716'
    const endState = truckCardsReducer(startState,
        addTruckCardAC(title, truckGroupId,stateNumber, description, truckLocation))
    const addedCard = endState.find(el => el.title === title)

    expect(endState.length).toBe(startState.length + 1)
    expect(addedCard && addedCard.truckGroupId).toBe(truckGroupId)
    expect(addedCard && addedCard.description).toBeNull()
    expect(addedCard && addedCard.truckLocation).toBe(truckLocation)
})

test('truck card group should be changed', () => {
    const newTruckGroupId = v1()
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardGroupAC(truckId1, newTruckGroupId))
    const addedCard = endState.find(el => el.id === truckId1)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.truckGroupId).toBe(newTruckGroupId)
})

test('truck card title should be changed', () => {
    const newTitle = 'КМУ'
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardTitleAC(truckId2, newTitle))
    const addedCard = endState.find(el => el.id === truckId2)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.title).toBe(newTitle)
})

test('truck card state number should be changed', () => {
    const newStateNumber = 'А001МР716'
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardStateNumberAC(truckId3, newStateNumber))
    const addedCard = endState.find(el => el.id === truckId3)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.stateNumber).toBe(newStateNumber)
})

test('truck card archived value should be changed', () => {
    const archivedValue = true
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardArchivedValueAC(truckId4, archivedValue))
    const addedCard = endState.find(el => el.id === truckId4)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.archived).toBeTruthy()
})


test('truck card location should be changed', () => {
    const newLocation = 'ДрРЭС'
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardLocationAC(truckId3, newLocation))
    const addedCard = endState.find(el => el.id === truckId3)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.truckLocation).toBe(newLocation)
})


test('truck card show in calendar value should be changed to false by truck id', () => {
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardShowValueByTruckIdAC(truckId3, false))
    const addedCard = endState.find(el => el.id === truckId3)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.showInCalendar).toBe(false)
})



test('truck card show in calendar value should be changed to true by truck id', () => {
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardShowValueByTruckIdAC(truckId4, true))
    const addedCard = endState.find(el => el.id === truckId4)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.showInCalendar).toBe(true)
})


test('truck card show in calendar value should be changed to false by group id', () => {
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardShowValueByGroupIdAC(truckGroupId3, false))
    const addedCard = endState.find(el => el.id === truckId3)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.showInCalendar).toBe(false)
})



test('truck card show in calendar value should be changed to true by group id', () => {
    const endState: Array<TruckType> = truckCardsReducer(startState,
        changeTruckCardShowValueByGroupIdAC(truckGroupId3, true))
    const addedCard = endState.find(el => el.id === truckId4)


    expect(endState.length).toBe(startState.length)
    expect(addedCard && addedCard.showInCalendar).toBe(true)
})

// test('truck card readyToGo value should be changed to false', () => {
//     const failureCause = 'No driver'
//     const endState: Array<TruckType> = truckCardsReducer(startState,
//         setTruckNotReadyToGoAC(truckId1, failureCause))
//     const addedCard = endState.find(el => el.id === truckId1)
//
//
//     expect(endState.length).toBe(startState.length)
//     expect(addedCard && addedCard.readyToGo).toBe(false)
//     expect(addedCard && addedCard.failureCause).toBe(failureCause)
// })
// test('truck card readyToGo value should be changed to true', () => {
//     const endState: Array<TruckType> = truckCardsReducer(startState,
//         setTruckReadyToGoAC(truckId1))
//     const addedCard = endState.find(el => el.id === truckId4)
//
//
//     expect(endState.length).toBe(startState.length)
//     expect(addedCard && addedCard.readyToGo).toBeTruthy()
//     expect(addedCard && addedCard.failureCause).toBeNull()
// })
//
// test('truck card failure cause should be changed', () => {
//     const newFailureCause = 'engine malfunction'
//     const endState: Array<TruckType> = truckCardsReducer(startState,
//         changeTruckFailureCauseToGoAC(truckId4, newFailureCause))
//     const addedCard = endState.find(el => el.id === truckId4)
//
//     expect(endState.length).toBe(startState.length)
//     expect(addedCard && addedCard.failureCause).toBe(newFailureCause)
// })
