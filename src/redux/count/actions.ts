export const ADD_COUNT = "ADD_COUNT";
export const MINUS_COUNT = "MINUS_COUNT";

export const addCount = (payload: number) => ({
    type: ADD_COUNT,
    payload: payload,
});

export const minusCount = (payload: number) => ({
    type: MINUS_COUNT,
    payload: payload,
});

export type addCountAction = ReturnType<typeof addCount>;
export type minusCountAction = ReturnType<typeof minusCount>;
