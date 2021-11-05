const initialState = { cart: []};

const cartElement = (state = initialState, action) => {
    let nextState;

    switch(action.type) {
        case 'ADD_TO_CARWT':
            nextState = { ...state, cart: action.value};
        return nextState  || state;
        default:
            return state;
    }
}

export default cartElement;