import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";


const LOCALE_STORAGE_KEY = "user/userdata";

const initialState = {
    value: UsersData
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        updateUsername: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            });
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },

    }
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;