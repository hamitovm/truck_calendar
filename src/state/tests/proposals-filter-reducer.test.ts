import {
    addNotToShowTrucksAC,
    changeShowNewProposalsValueAC, changeShowRejectedProposalsValueAC,
    deleteNotToShowTrucksAC, proposalsFilterReducer,
    ProposalsFilterType
} from "../proposals-filter-reducer";

let startState: ProposalsFilterType

beforeEach(()=> {
    startState = {
        showRejectedProposals: false,
        showNewProposals: true,
        trucksNotToShow:  ['truckId1', 'truckId2', 'truckId3', 'truckId4']
    }
})

test('show rejected proposals', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, changeShowRejectedProposalsValueAC(true))
    expect(endState.showRejectedProposals).toBeTruthy()
})

test('hide rejected proposals', () => {
    let newStartState: ProposalsFilterType = {
        showRejectedProposals: true,
        showNewProposals: true,
        trucksNotToShow: []
    }
    const endState: ProposalsFilterType = proposalsFilterReducer(newStartState, changeShowRejectedProposalsValueAC(false))
    expect(endState.showRejectedProposals).toBeFalsy()
})

test('hide new proposals', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, changeShowNewProposalsValueAC(false))
    expect(endState.showRejectedProposals).toBeFalsy()
})

test('show new proposals', () => {
    let newStartState: ProposalsFilterType = {
        showRejectedProposals: true,
        showNewProposals: false,
        trucksNotToShow: []
    }
    const endState: ProposalsFilterType = proposalsFilterReducer(newStartState, changeShowNewProposalsValueAC(true))
    expect(endState.showRejectedProposals).toBeTruthy()
})

test('add truck to hide', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, addNotToShowTrucksAC(['truckId5', 'truckId6']))
    expect(endState.trucksNotToShow.length).toBe(startState.trucksNotToShow.length + 2)
    expect(endState.trucksNotToShow.includes('truckId5')).toBeTruthy()
    expect(endState.trucksNotToShow.includes('truckId6')).toBeTruthy()
})

test('delete truck from hided trucks', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, deleteNotToShowTrucksAC(['truckId1', 'truckId2']))
    expect(endState.trucksNotToShow.length).toBe(startState.trucksNotToShow.length - 2)
    expect(endState.trucksNotToShow.includes('groupId1')).toBeFalsy()
    expect(endState.trucksNotToShow.includes('groupId2')).toBeFalsy()
})