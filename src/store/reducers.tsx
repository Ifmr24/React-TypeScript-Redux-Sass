import {READ_ALL, ADD_POST} from './actions';

let INITIAL_STATE = {
    data: [
        'Hola',
        'Initial',
        'State'
    ]
}

export let initialReducer = (state = INITIAL_STATE, action: {type:any; payload: any}) => {
    switch (action.type) {
        case READ_ALL:
            return { ...state, data: [...state.data]}
        case ADD_POST:
            state.data.push(action.payload)
            return { ...state, data: [...state.data]}
        default:
            return state
    }
}