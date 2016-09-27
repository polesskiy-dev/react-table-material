import * as types from '../constants/action-types'

/**
 * Notifications reducer
 *
 * @param state - notifications List
 * @param action
 * @returns state
 */
const notifications = (state, action) => {
    switch (action.type) {
        /** error message handle */
        case types.SHOW_ERROR_NOTIFICATION:
            return state.push(action.payload.message);
        case types.HIDE_ERROR_NOTIFICATION:
            return state.shift();

        /** default */
        default:
            return state;
    }
};

export default notifications