import * as types from '../constants/action-types'

/**
 * Data pending reducer
 *
 * @param state
 * @param action
 * @returns {object} state
 */
const dataPending = (state, action) => {
    switch (action.type) {
        /**formFields pending, update connections amount*/
        case types.DATA_PENDING_START:
            return state.update('openedConnectionsAmount', val=>++val);
        case types.DATA_PENDING_FINISHED:
            return state.update('openedConnectionsAmount', val=>--val);

        /** default */
        default:
            return state;
    }
};

export default dataPending