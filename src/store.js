import { configureStore } from "@reduxjs/toolkit";
import { headerSlice, listSlice, priceHistory, coinInfo } from "./stateSlices";

export default configureStore({
    reducer:{
        header: headerSlice,
        list: listSlice,
        PH: priceHistory,
        coinInfo: coinInfo
    }
})