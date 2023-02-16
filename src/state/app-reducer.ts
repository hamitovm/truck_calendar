export type AppStatusStateType = {
    //происходит ли сейчас взаимодествие с сервером
    status: RequestStatusType,
    //если есть глобальная ошибка - запишется сюда
    error: string | null,
    //инициализировано ли приложение (проверка пользователя, получение настроек и т.д.)
    isInitialized: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const AppStatusInitialState: AppStatusStateType = {
    status: "idle",
    error: null,
    isInitialized: false,
}

export const appReducer = (state: AppStatusStateType = AppStatusInitialState, action: AppActionsType) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR',
    error
} as const)

export const setAppStatusAC = (status: RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
} as const)

export const setAppInitializedAC = (value: boolean) => ({
    type: 'APP/SET-INITIALIZED',
    value
} as const)

export type setErrorActionType = ReturnType<typeof setAppErrorAC>
export type setStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppInitializedActionType = ReturnType<typeof setAppInitializedAC>

export type AppActionsType = setErrorActionType | setStatusActionType | setAppInitializedActionType
