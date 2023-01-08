import { createSlice } from '@reduxjs/toolkit';

export const Transitions = createSlice({
    name: 'Transitions',
    initialState: {
        sidebarStatus: false,
    },
    reducers: {
        toggleSidebar: (state ,action) => { 
            state.sidebarStatus = action.payload;
        }
    }
});

export const { toggleSidebar } = Transitions.actions;
const TransitionsReducers = Transitions.reducer;
export default TransitionsReducers;