import { createSlice } from "@reduxjs/toolkit";

export const coinInfo = createSlice({
    name: "coin info slice",
    initialState:{
        coin: null
    },
    reducers:{
        getCoin: (state, action)=>{
            state.coin = action.payload
        }
    }
});

export const { getCoin } = coinInfo.actions;

export default coinInfo.reducer