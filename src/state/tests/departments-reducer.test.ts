import {v1} from 'uuid'
import {
    addDepartmentAC,
    changeFullNameDepartmentAC, changeShortNameDepartmentAC, deleteDepartmentAC,
    departmentsReducer,
    DepartmentType,
    returnFromArchiveDepartmentAC,
    sendToArchiveDepartmentAC, setOrderDepartmentAC
} from "../departments-reducer";



let departmentId1: string
let departmentId2: string
let departmentId3: string
let departmentId4: string


let startState: Array<DepartmentType>

beforeEach(() => {
    departmentId1 = v1()
    departmentId2 = v1()
    departmentId3 = v1()
    departmentId4 = v1()
    startState = [
        {
            id: departmentId1,
            shortName: 'АРЭС',
            fullName: 'Арский РЭС',
            order: 1,
            archived: false
        },
        {
            id: departmentId2,
            shortName: 'БРЭС',
            fullName: 'Балтасинский РЭС',
            order: 2,
            archived: false
        },
        {
            id: departmentId3,
            shortName: 'ВРЭС',
            fullName: 'Высокогорский РЭС',
            order: 3,
            archived: false
        },
        {
            id: departmentId4,
            shortName: 'ЗРЭС',
            fullName: 'Зеленодольский РЭС',
            order: null,
            archived: true
        }]
})


test('correct department should be deleted', () => {
    const endState: Array<DepartmentType> = departmentsReducer(startState, deleteDepartmentAC(departmentId1))
    expect(endState.length).toBe(startState.length - 1)
    expect(endState[0].id).toBe(departmentId2)
})


test('new department should be added', () => {
    const shortName = 'НРЭС'
    const fullName = 'Новый РЭС'

    const endState: Array<DepartmentType> = departmentsReducer(startState,
        addDepartmentAC(shortName, fullName))
    // const addedCard = startState.find(el => el.id === truckId)

    expect(endState.length).toBe(startState.length + 1)
    expect(endState[4].shortName).toBe(shortName)
})

test('correct department should change archived value to true', () => {
    const endState: Array<DepartmentType> = departmentsReducer(startState,
        sendToArchiveDepartmentAC(departmentId1))

    expect(endState.length).toBe(startState.length)
    expect(endState[0].archived).toBeTruthy()
})

test('correct department should change archived value to false', () => {
    const endState: Array<DepartmentType> = departmentsReducer(startState,
        returnFromArchiveDepartmentAC(departmentId4))

    expect(endState.length).toBe(startState.length)
    expect(endState[3].archived).toBeFalsy()
})


test('correct department should change shortName', () => {
    const newShortName = 'ЮРЭС'
    const endState: Array<DepartmentType> = departmentsReducer(startState,
        changeShortNameDepartmentAC(departmentId1, newShortName))

    expect(endState.length).toBe(startState.length)
    expect(endState[0].shortName).toBe(newShortName)
})

test('correct department should change fullName', () => {
    const newFullName = 'Новый РЭС'
    const endState: Array<DepartmentType> = departmentsReducer(startState,
        changeFullNameDepartmentAC(departmentId2, newFullName))

    expect(endState.length).toBe(startState.length)
    expect(endState[1].fullName).toBe(newFullName)
})

test('correct department should order', () => {
    const endState: Array<DepartmentType> = departmentsReducer(startState,
        setOrderDepartmentAC(departmentId3, 6))

    expect(endState.length).toBe(startState.length)
    expect(endState[2].order).toBe(6)
})
