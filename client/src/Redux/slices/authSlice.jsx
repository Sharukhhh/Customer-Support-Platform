import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    user : null
};


const authSlice = createSlice( {

    name : 'login',
    initialState ,

    reducers : {

        setData : (state , action) => {
            state.user = action.payload;
        },

        logoutUser : (state) => {
            state.user = null;
        }
    }
});

export const {setData , logoutUser} = authSlice.actions;
export default authSlice.reducer;