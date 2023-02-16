import {v1} from "uuid";


export type DepartmentType = {
    id: string
    shortName: string
    fullName: string
    //order - порядок отображения среди других служб
    order: number | null
    archived: boolean
}

export const departmentId1 = v1()
export const departmentId2 = v1()
export const departmentId3 = v1()
export const departmentId4 = v1()
export const departmentId5 = v1()
export const departmentId6 = v1()
export const departmentId7 = v1()
export const departmentId8 = v1()
export const departmentId9 = v1()

export const departmentsInitialState: Array<DepartmentType> = [
    {
        id: departmentId1,
        shortName: 'АРЭС',
        fullName: 'Арский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId2,
        shortName: 'БРЭС',
        fullName: 'Балтасинский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId3,
        shortName: 'ВРЭС',
        fullName: 'Высокогорский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId4,
        shortName: 'ЗРЭС',
        fullName: 'Зеленодольский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId5,
        shortName: 'ЛРЭС',
        fullName: 'Лаишевский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId6,
        shortName: 'ПРЭС',
        fullName: 'Пестречинский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId7,
        shortName: 'ПрРЭС',
        fullName: 'ПригородныйРЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId8,
        shortName: 'РРЭС',
        fullName: 'Рыбно-Слободский РЭС',
        order: null,
        archived: false
    },
    {
        id: departmentId9,
        shortName: 'Others',
        fullName: '-',
        order: null,
        archived: false
    }
]

export type DepartmentsReducerActionType = DeleteDepartmentActionType
    | AddDepartmentActionType
    | ReturnFromArchiveDepartmentActionType
    | SendToArchiveDepartmentActionType
    | ChangeShortNameDepartmentActionType
    | ChangeFullNameDepartmentActionType
    | SetOrderDepartmentActionType

export type DeleteDepartmentActionType = ReturnType<typeof deleteDepartmentAC>
export type AddDepartmentActionType = ReturnType<typeof addDepartmentAC>
export type ReturnFromArchiveDepartmentActionType = ReturnType<typeof returnFromArchiveDepartmentAC>
export type SendToArchiveDepartmentActionType = ReturnType<typeof sendToArchiveDepartmentAC>
export type ChangeShortNameDepartmentActionType = ReturnType<typeof changeShortNameDepartmentAC>
export type ChangeFullNameDepartmentActionType = ReturnType<typeof changeFullNameDepartmentAC>
export type SetOrderDepartmentActionType = ReturnType<typeof setOrderDepartmentAC>

export const deleteDepartmentAC = (departmentId: string) => {
    return {
        type: "DELETE_DEPARTMENT",
        departmentId
    } as const
}


export const addDepartmentAC = (shortName: string,
                                fullName: string) => {
    return {
        type: "ADD_DEPARTMENT",
        shortName,
        fullName
    } as const
}


export const returnFromArchiveDepartmentAC = (departmentId: string) => {
    return {
        type: "RETURN_FROM_ARCHIVE_DEPARTMENT",
        departmentId
    } as const
}


export const sendToArchiveDepartmentAC = (departmentId: string) => {
    return {
        type: "SEND_TO_ARCHIVE_DEPARTMENT",
        departmentId
    } as const
}


export const changeShortNameDepartmentAC = (departmentId: string, newShortName: string) => {
    return {
        type: "CHANGE_SHORT_NAME_DEPARTMENT",
        departmentId,
        newShortName
    } as const
}


export const changeFullNameDepartmentAC = (departmentId: string, newFullName: string) => {
    return {
        type: "CHANGE_FULL_NAME_DEPARTMENT",
        departmentId,
        newFullName
    } as const
}


export const setOrderDepartmentAC = (departmentId: string, order: number | null) => {
    return {
        type: "SET_ORDER_DEPARTMENT",
        departmentId,
        order
    } as const
}

export const departmentsReducer = (state:  Array<DepartmentType> = departmentsInitialState, action: DepartmentsReducerActionType): Array<DepartmentType> => {
    switch (action.type) {
        case 'DELETE_DEPARTMENT':
            return state.filter(el => el.id !== action.departmentId)
        case 'ADD_DEPARTMENT':
            return [
                ...state,
                {
                    id: v1(),
                    shortName: action.shortName,
                    fullName: action.fullName,
                    order: null,
                    archived: false
                }
            ]
        case 'RETURN_FROM_ARCHIVE_DEPARTMENT':
            return state.map((el => el.id === action.departmentId ? {
                ...el,
                archived: false
            } : el))
        case "SEND_TO_ARCHIVE_DEPARTMENT":
            return state.map((el => el.id === action.departmentId ? {
                ...el,
                archived: true
            } : el))
        case "CHANGE_SHORT_NAME_DEPARTMENT":
            return state.map((el => el.id === action.departmentId ? {
                ...el,
                shortName: action.newShortName
            } : el))
        case "CHANGE_FULL_NAME_DEPARTMENT":
            return state.map((el => el.id === action.departmentId ? {
                ...el,
                fullName: action.newFullName
            } : el))
        case "SET_ORDER_DEPARTMENT":
            return state.map((el => el.id === action.departmentId ? {
                ...el,
                order: action.order
            } : el))
        default:
            return state
    }
}