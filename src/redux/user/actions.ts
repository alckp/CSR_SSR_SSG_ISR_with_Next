import { userInfo } from "./reducer";

export const GET_USER = "GET_USER";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";

export const getUser = (payload: string) => ({
    type: GET_USER,
    payload: payload,
});

export const success = (payload: userInfo) => ({
    type: SUCCESS,
    payload: payload,
});

export const failed = (payload: string) => ({
    type: FAILED,
    payload: payload,
});

export type getUserAction = ReturnType<typeof getUser>;
export type successAction = ReturnType<typeof success>;
export type failedAction = ReturnType<typeof failed>;
