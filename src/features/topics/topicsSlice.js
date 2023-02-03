const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const id = action.payload.id
            state.topics.id = {
                ...action.payload,
                quizIds: []
            }
        }
    }
})

export const selectTopics = state => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;