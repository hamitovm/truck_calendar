import {
    addNotToShowGroupAC,
    addNotToShowTruckAC,
    changeShowNewProposalsValueAC, changeShowRejectedProposalsValueAC, deleteNotToShowGroupAC,
    deleteNotToShowTruckAC, proposalsFilterReducer,
    ProposalsFilterType
} from "../proposals-filter-reducer";

let startState: ProposalsFilterType

beforeEach(()=> {
    startState = {
        showRejectedProposals: false,
        showNewProposals: true,
        groupsNotToShow: ['groupId1', 'groupId2', 'groupId3', 'groupId4'],
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
        groupsNotToShow: [],
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
        groupsNotToShow: [],
        trucksNotToShow: []
    }
    const endState: ProposalsFilterType = proposalsFilterReducer(newStartState, changeShowNewProposalsValueAC(true))
    expect(endState.showRejectedProposals).toBeTruthy()
})


test('add truck group to hide', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, addNotToShowGroupAC('groupId5'))
    expect(endState.groupsNotToShow.length).toBe(startState.groupsNotToShow.length + 1)
    expect(endState.groupsNotToShow.includes('groupId5')).toBeTruthy()
})

test('delete truck group from hided trucks', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, deleteNotToShowGroupAC('groupId1'))
    expect(endState.groupsNotToShow.length).toBe(startState.groupsNotToShow.length - 1)
    expect(endState.groupsNotToShow.includes('groupId1')).toBeFalsy()
})



test('add truck to hide', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, addNotToShowTruckAC('truckId5'))
    expect(endState.trucksNotToShow.length).toBe(startState.groupsNotToShow.length + 1)
    expect(endState.trucksNotToShow.includes('truckId5')).toBeTruthy()
})

test('delete truck from hided trucks', () => {
    const endState: ProposalsFilterType = proposalsFilterReducer(startState, deleteNotToShowTruckAC('truckId1'))
    expect(endState.trucksNotToShow.length).toBe(startState.groupsNotToShow.length - 1)
    expect(endState.trucksNotToShow.includes('groupId1')).toBeFalsy()
})