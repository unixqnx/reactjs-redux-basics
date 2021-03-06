const userReducer = (
    state = {
        name: "Dmitriy",
        age: 33
    }, 
    action
) => {
    switch(action.type){
        case "SET_NAME_FULFILLED"://"SET_NAME":
            state = {
                ...state,
                name: action.payload,
            };
        break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
        break;
    }
    return state;
};

export default userReducer;