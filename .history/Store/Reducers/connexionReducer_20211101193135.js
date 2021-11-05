const initialState = { online: false};

const connectUser = (state = initialState, action) => {
    let nextState;

    switch(action.type) {
        case 'ONLINE':
            nextState = { ...state, info: action.value};
        return nextState  || state;
        default:
            return state;
    }
}

export default connectUser;