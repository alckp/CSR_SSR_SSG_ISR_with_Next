import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./user/saga";

export const rootSaga = function* root() {
    yield all([fork(watchGetUser)]);
};
