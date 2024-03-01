import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todos {
    list: string[];
}

const initialState: Todos = {
    list: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((todo, index) => index !== action.payload);
        },
    },
});

export default todoSlice;
export const { addTodo, deleteTodo } = todoSlice.actions;
