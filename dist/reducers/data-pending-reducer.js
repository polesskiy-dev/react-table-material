import * as types from '../constants/action-types'

/**
 * Data pending reducer
 *
 * @param dataPending
 * @param action
 * @returns {object} state
 */
const dataPending = (dataPending, action) => {
    switch (action.type) {
        /**formFields pending, update connections amount*/
        case types.DATA_PENDING_START:
            return dataPending.update('openedConnectionsAmount', val=>++val);
        case types.DATA_PENDING_FINISHED:
            return dataPending.update('openedConnectionsAmount', val=>--val);

        /** default */
        default:
            return dataPending;
    }
};

export default dataPending