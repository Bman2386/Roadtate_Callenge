
export const RECIEVE_MENU = 'RECIEVE_MENU'

const receiveMenu = menu => {
    return {
        type: RECIEVE_MENU,
        menu
    }
}

export const fetchMenu = () => dispatch => {
    return menu => dispatch(receiveMenu(menu))
}