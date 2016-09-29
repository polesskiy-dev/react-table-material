"use strict";
import 'babel-polyfill';
import * as actions from '../actions/actions'
// import {delay} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import * as utils from '../helpers/fetch-utils'

/**
 * Fetch items saga.
 */
export default function* fetchItemsSaga() {
    try {
        //dispatch that we will start request now
        yield put(actions.dataPendingStart());

        //fetch items from server
        const items = yield call(utils.httpGet, '/');

        yield put(actions.getItemsSuccess(items));

        //dispatch that request finished
        yield put(actions.dataPendingFinished());
    } catch (err) {
        //dispatch error while fetching
        yield put(actions.getItemsFailure(new Error(err)));

        // //show fetching todosApi error in notification
        // yield put(errorActions.showErrorNotification(err.toString()));
        //
        // //dispatch that request finished
        // yield put({type: types.DATA_PENDING_FINISHED});
        //
        // //hide notification after delay
        // yield delay(NOTIFICATION_TTL);
        // yield put(errorActions.hideErrorNotification())
    }
}