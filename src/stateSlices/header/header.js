import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: 'header',
    initialState:{
        productsModal: false,
        companyModal: false
    },
    reducers:{
        modalHover: (state, action)=>{
            if(action.payload == 'productsModal'){
                state.productsModal = true
            }else if(action.payload == 'companyModal'){
                state.companyModal = true;
            }
        },
        modalUnhover: (state, action)=>{
            if(action.payload == 'productsModal'){
                state.productsModal = false
            }else if(action.payload == 'companyModal'){
                state.companyModal = false
            }
        }
    }
});

export const { modalHover, modalUnhover } = headerSlice.actions;

export default headerSlice.reducer;