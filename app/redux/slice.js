const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    name : "Vikram kautlya",
    initialState, 
    reducers: {
        addUsers: (state, action) => {
            // console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload 
            }
            state.users.push(data);
        }
    }
})

export const { addUsers } = Slice.actions;
export default Slice.reducer;

