import * as types from '../constants/action-types'


/**
 * Notifications reducer
 *
 * @param notifications - notifications List
 * @param action
 * @returns state
 */
const notifications = (notifications, action) => {
    switch (action.type) {
        /** error message handle */
        case types.SHOW_ERROR_NOTIFICATION:
            return notifications.push(action.payload.message);
        case types.HIDE_ERROR_NOTIFICATION:
            return notifications.shift();

        /** default */
        default:
            return notifications;
    }
};

export default notifications