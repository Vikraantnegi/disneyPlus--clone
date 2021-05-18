import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    image: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails : (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.image = action.payload.image;
        },

        setSignOutState: (state) => {
            state.name = "";
            state.email = "";
            state.image = "";
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const UserName = state => state.user.name;
export const UserEmail = state => state.user.email;
export const UserImage = state => state.user.image;

export default userSlice.reducer;