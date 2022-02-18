import {createSlice} from '@reduxjs/toolkit';

export const userDetailsSlice = createSlice({
    name:"userDetails",
    initialState:{
        user:{}
    },
    reducers:{
        UserLoginData:(state,action)=>{

            state.user = action.payload.userDetails

        }
    }
})

export const {UserLoginData} = userDetailsSlice.actions

export default userDetailsSlice.reducer //to store

