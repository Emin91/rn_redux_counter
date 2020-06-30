import { INC, DEC, RESET, NEW_VALUE } from "./constants"

const initialState = {
    name: 'Emin',
    surName: 'Zeynalov',
    bgColor: '#2e3c73',
    counter: 0,
}

export const settingReducer = (state = initialState, action) => {
    switch(action.type) {
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET:
            return {
                ...state,
                counter: 0
            }
        case NEW_VALUE:
            console.log('action.payload', action.payload)
            return {
                ...state,
                counter: action.payload++
            }
        default:
            return state    
    }
    
}