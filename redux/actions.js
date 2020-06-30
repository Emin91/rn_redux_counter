const { INC, DEC, RESET, NEW_VALUE } = require("./constants");

export const increment = () => {
    return {
        type: INC,
    }
}

export const decrement = () => {
    return {
        type: DEC,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

export const newCounter = (text) => {
    return {
        type: NEW_VALUE,
        payload: text,
    }
}