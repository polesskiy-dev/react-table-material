"use strict";
import 'babel-polyfill';
import * as types from '../constants/action-types'
import {takeEvery} from 'redux-saga'
import {fork} from 'redux-saga/effects'
import getItemsSaga from './get-items-saga'

/**
 * Starts getItemsSaga on each dispatched `GET_ITEMS_START` action.
 */
function* watchGetItemsStarted() {
    yield* takeEvery(types.GET_ITEMS_START, getItemsSaga);
}

/**
 * Combine sagas
 * Fork to start watchers in parallel
 */
export default function* rootSaga() {
    yield fork(watchGetItemsStarted);
}