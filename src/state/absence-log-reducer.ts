import {v1} from "uuid";
import {ProposalStatuses} from "./truck-proposals-reducer";

export type AbsenceEntryType = {
    id: string
    description: string
    truckId: string
    authorId: null | string
}

export type AbsenceLogType = {
    [key: string]: Array<AbsenceEntryType>
}

export type AbsenceLogActionType = {
    type: 'AbsenceLogActionType'
}
export const absenceLogReducer = () => {

}