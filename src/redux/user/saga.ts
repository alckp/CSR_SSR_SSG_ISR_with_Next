import { call, put, takeEvery } from "redux-saga/effects";
import { success, failed, GET_USER, getUserAction } from "./actions";
import { userInfo } from "./reducer";

// sample repository pattern
const getUserById = async (userId: string): Promise<userInfo> => {
    return { name: `sample ${userId}`, age: Math.floor(Math.random() * 64 / 0.6), nationality: "USA"};
};

export function* handleGetUser(action: getUserAction) {
    try {
        const res: userInfo = yield call(getUserById, action.payload);
        yield put(success(res));
    } catch (error) {
        yield put(failed(error.message || "Failed to get user info"));
    }
}

export function* watchGetUser() {
    yield takeEvery(GET_USER, handleGetUser);
}
