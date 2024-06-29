import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : 'config',
    initialState : {
        language_type : "en",
        shareIcons : false,
        shimmerGPT : false
    },
    reducers : {
        changeLanguage : (state,action)=>{
            state.language_type = action.payload
        },
        showShareIcons : (state)=>{
            state.shareIcons = !state.shareIcons
        },
        showShimmerGPT : (state)=>{
            state.shimmerGPT = !state.shimmerGPT
        }
    }
})
export const {changeLanguage,showShareIcons,showShimmerGPT} = configSlice.actions
export default configSlice.reducer