import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: null,
    error: false
}

export const Jeu = createSlice({
    name: "Jeu",
    initialState,

    reducers: {
        FETCH_START: (draft) =>{
            draft.loading = true;
        },
        FETCH_SUCCESS: (draft, action) =>{
            draft.data = action.payload;
            draft.loading = false;
        },
        FETCH_FAILURE: (draft) =>{
            draft.error = true;
            draft.loading = false;
        },
        FETCH_SUCCESS_ID1: (draft, action) =>{
            draft.data = action.payload.filter(value => value.id === 1)
        },
        FETCH_SUCCESS_ID2: (draft, action) =>{
            draft.data = action.payload.filter(value => value.id === 2)
        }
    }
})

export const {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, FETCH_SUCCESS_ID} = Jeu.actions
export default Jeu.reducer;