import { RECIEVE_MENU } from "../actions/user_actions";

const MenuReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_MENU:
            newState[action.menu.id] = action.menu 
            return newState;
        default:
            return state;
    }
}

export default MenuReducer;