import { createSlice } from "@reduxjs/toolkit";

export const priceHistory = createSlice({
    name: "price history",
    initialState:{
        history: []
    },
    reducers:{
        addPrices: (state, action)=>{
            state.history = action.payload
        }
    }
});

export const { addPrices } = priceHistory.actions;
export default priceHistory.reducer;