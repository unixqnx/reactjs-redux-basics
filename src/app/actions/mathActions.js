export function addNumber(name){
    return {
        type: "ADD",
        payload: name
    }
}

export function subtractNumber(name){
    return {
        type: "SUBTRACT",
        payload: name
    }
}