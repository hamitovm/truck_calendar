import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {departmentsReducer, DepartmentsReducerActionType} from "./departments-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import {truckProposalModalReducer, TruckProposalModalReducerActionType} from "./truck-proposal-modal-reducer";
import {truckCardsReducer, TruckCardsReducerActionType} from "./truck-cards-reducer";
import {truckGroupsReducer, TruckGroupsReducerActionType} from "./truck-groups-reducer";
import {TruckProposalsActionType, truckProposalsReducer} from "./truck-proposals-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


//Комбинируются разные редюсеры в один, в качестве свойства - ветка стейта, для которой редюсер предназначен
export const rootReducer = combineReducers({
    app: appReducer,
    // absenceLog: absenceLogReducer,
    departments: departmentsReducer,
    truckProposalModal: truckProposalModalReducer,
    truckCards: truckCardsReducer,
    truckGroups: truckGroupsReducer,
    truckProposals: truckProposalsReducer,
})
//автоматическая типизация стейта через ReturnType<typeof --->
export type AppRootStateType = ReturnType<typeof rootReducer>


//Формируется стейт через корневой редюсер
//applyMiddleware(thunk) - thunk импортирован от redux-thunk (установлен через yarn add redux-thunk),
//нужен для того, что все работало при диспатче thunk,
// т.к. без этого без ошибок диспатчить можно только экшн-криейторы
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionType = AppActionsType
    // | AbsenceLogActionType
    | DepartmentsReducerActionType
    | TruckCardsReducerActionType
    | TruckGroupsReducerActionType
    | TruckProposalModalReducerActionType
    | TruckProposalsActionType
//Типизация того, что может приниматься диспатчем - из документации https://redux.js.org/usage/usage-with-typescript
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionType>
export type RootState = ReturnType<typeof store.getState>

//Типизация санки - из документации https://redux.js.org/usage/usage-with-typescript
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionType>

// @ts-ignore
// window.store = store

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk))