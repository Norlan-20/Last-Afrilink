const initialState = { info: ['dlnclsdk'] };

const connectUser = (state = initialState, action) => {
    let nextState;

    switch(action.type) {
        case 'LOGIN_NOW':
            nextState = { ...state, info: action.value};
        return nextState  || state;
        default:
            return state;
    }

}

export default connectUser;