import {v1} from 'uuid'
import {
    deleteTruckProposalAC,
    ProposalStatuses,
    truckProposalsReducer,
    TruckProposalsType,
    TruckProposalType,
    truckProposalId1,
    truckProposalId2,
    addTruckProposalAC,
    updateProposalTruckAC,
    updateProposalDescriptionAC,
    updateProposalDateAC,
    setHighPriorityAC,
    setLowPriorityAC,
    changeDriverAC,
    changeTruckProposalStatusToNewAC,
    acceptTruckProposalAC,
    rejectTruckProposalAC,

} from "../truck-proposals-reducer";
import {getDayMonthYear} from "../../helpers/helpers";
import {truckId1, truckId2, truckId3, truckId5, truckId6, truckId7, truckId8} from "../truck-cards-reducer";
import {
    departmentId1,
    departmentId2,
    departmentId3,
    departmentId4,
    departmentId5,
    departmentId6, departmentId7, departmentId9
} from "../departments-reducer";


let january1_2023 = new Date(2023, 0, 1)
let january2_2023 = new Date(2023, 0, 2)
let january4_2023 = new Date(2023, 0, 4)
let january5_2023 = new Date(2023, 0, 5)
let january9_2023 = new Date(2023, 0, 9)

let proposalId1: string
let proposalId2: string
let proposalId3: string
let proposalId4: string


let startState: TruckProposalsType

beforeEach(() => {
    proposalId1 = v1()
    proposalId2 = v1()
    proposalId3 = v1()
    proposalId4 = v1()

    startState = {
        [getDayMonthYear(january1_2023)]: [
            {
                id: proposalId1,
                addedDate: january1_2023,
                description: 'Замена изоляторов',
                truckId: truckId1,
                driver: 'Иванов',
                departmentId: departmentId1,
                status: 'new',
                highPriority: true
            },
            {
                id: proposalId2,
                addedDate: january1_2023,
                description: 'Замена опор',
                truckId: truckId3,
                driver: null,
                departmentId: departmentId2,
                status: "accepted",
                highPriority: false
            }
        ],
        [getDayMonthYear(january5_2023)]: [
            {
                id: proposalId3,
                addedDate: new Date(2023, 0, 4),
                description: 'Перетяжка линий',
                truckId: truckId2,
                driver: null,
                departmentId: departmentId3,
                status: "new",
                highPriority: false
            },
            {
                id: proposalId4,
                addedDate: new Date(2023, 0, 3),
                description: 'Замена трансформатора',
                truckId: truckId5,
                driver: null,
                departmentId: departmentId4,
                status: "new",
                highPriority: false
            }
        ]
    }
})


test('correct proposal should be deleted', () => {
    const endState = truckProposalsReducer(startState, deleteTruckProposalAC(getDayMonthYear(january1_2023), proposalId1))
    expect(endState[getDayMonthYear(january1_2023)].length).toBe(1)
    expect(endState[getDayMonthYear(january1_2023)].every(el => el.id !== proposalId1)).toBeTruthy()
    expect(endState[getDayMonthYear(january5_2023)].length).toBe(startState[getDayMonthYear(january5_2023)].length)
})


test('new proposal should be added', () => {
    let description = 'установка опор'
    let truckId = truckId7
    let driver = 'Иванов'
    let departmentId = departmentId7
    let highPriority = false
    const endState: TruckProposalsType = truckProposalsReducer(startState, addTruckProposalAC(getDayMonthYear(january5_2023),
        description, truckId, driver, departmentId, highPriority))
    expect(endState[getDayMonthYear(january5_2023)].length).toBe(3)
    expect(endState[getDayMonthYear(january5_2023)][endState[getDayMonthYear(january5_2023)].length - 1].truckId).toBe(truckId)
    expect(Object.keys(startState).length).toBe(Object.keys(endState).length)
    expect(endState[getDayMonthYear(january1_2023)].length).toBe(startState[getDayMonthYear(january1_2023)].length)

})

test('truck should be changed in correct proposal', () => {
    let newTruckId = truckId6
    const endState = truckProposalsReducer(startState, updateProposalTruckAC(getDayMonthYear(january1_2023),
        proposalId1, newTruckId))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.truckId === newTruckId)
    expect(endState[getDayMonthYear(january1_2023)].length).toBe(2)
    expect(endState[getDayMonthYear(january1_2023)][0].truckId).toBe(newTruckId)
    expect(Object.keys(startState).length).toBe(Object.keys(endState).length)
    expect(proposalToCheck && getDayMonthYear(proposalToCheck.addedDate)).toBe(getDayMonthYear(new Date()))

})

test('description should be changed in correct proposal', () => {
    let newDescription = 'установка ПЗУ'
    const endState = truckProposalsReducer(startState, updateProposalDescriptionAC(getDayMonthYear(january1_2023),
        proposalId1, newDescription))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId1)

    expect(endState[getDayMonthYear(january1_2023)].length).toBe(2)
    expect(endState[getDayMonthYear(january1_2023)][0].description).toBe(newDescription)
    expect(Object.keys(startState).length).toBe(Object.keys(endState).length)
    expect(endState[getDayMonthYear(january1_2023)].length).toBe(startState[getDayMonthYear(january1_2023)].length)
    expect(proposalToCheck && getDayMonthYear(proposalToCheck.addedDate)).toBe(getDayMonthYear(new Date()))

})

test('date should be changed in correct proposal', () => {
    let newDate = january9_2023
    const endState = truckProposalsReducer(startState, updateProposalDateAC(getDayMonthYear(january5_2023),
        proposalId3, getDayMonthYear(newDate)))
    let proposalToCheck = endState[getDayMonthYear(newDate)].find(el => el.id === proposalId3)

    expect(endState[getDayMonthYear(january9_2023)].length).toBe(1)
    expect(endState[getDayMonthYear(january5_2023)].length).toBe(1)
    expect(endState[getDayMonthYear(january9_2023)][0].id).toBe(proposalId3)
    expect(Object.keys(endState).length).toBe(3)
    expect(proposalToCheck && getDayMonthYear(proposalToCheck.addedDate)).toBe(getDayMonthYear(new Date()))

})

test('priority be changed to high in correct proposal', () => {
    const endState = truckProposalsReducer(startState, setHighPriorityAC(getDayMonthYear(january1_2023),
        proposalId2))
    expect(endState[getDayMonthYear(january1_2023)][1].highPriority).toBe(true)
})

test('priority be changed to low in correct proposal', () => {
    const endState = truckProposalsReducer(startState, setLowPriorityAC(getDayMonthYear(january1_2023),
        proposalId1))
    expect(endState[getDayMonthYear(january1_2023)][0].highPriority).toBe(false)
})
test('driver should be added to correct proposal', () => {
    let newDriver = 'Володин В.И.'
    const endState = truckProposalsReducer(startState, changeDriverAC(getDayMonthYear(january1_2023),
        proposalId1, newDriver))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId1)

    expect(proposalToCheck && proposalToCheck.driver).toBe(newDriver)
})

test('driver should be deleted in correct proposal', () => {
    const endState = truckProposalsReducer(startState, changeDriverAC(getDayMonthYear(january1_2023),
        proposalId1, null))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId1)

    expect(proposalToCheck && proposalToCheck.driver).toBe(null)
})

test('accept truck proposal', () => {
    const endState = truckProposalsReducer(startState, acceptTruckProposalAC(getDayMonthYear(january1_2023),
        proposalId1))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId1)

    expect(proposalToCheck && proposalToCheck.status).toBe('accepted')
})

test('reject truck proposal', () => {
    const endState = truckProposalsReducer(startState, rejectTruckProposalAC(getDayMonthYear(january1_2023),
        proposalId1))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId1)

    expect(proposalToCheck && proposalToCheck.status).toBe('rejected')
})

test('change truck proposal status to "new"', () => {
    const endState = truckProposalsReducer(startState, changeTruckProposalStatusToNewAC(getDayMonthYear(january1_2023),
        proposalId2))
    let proposalToCheck = endState[getDayMonthYear(january1_2023)].find(el => el.id === proposalId2)

    expect(proposalToCheck && proposalToCheck.status).toBe('new')
})


