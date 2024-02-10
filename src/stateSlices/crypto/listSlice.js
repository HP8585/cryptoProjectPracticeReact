import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: {
        coins:[]
    },
    reducers:{
        pushCoins : (state, action)=>{
            state.coins = action.payload
        }
    }
});

export const { pushCoins } = listSlice.actions;

export default listSlice.reducer;