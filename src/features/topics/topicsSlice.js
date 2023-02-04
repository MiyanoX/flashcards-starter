const { createSlice } = require("@reduxjs/toolkit")

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const id = action.payload.id
            state.topics[id] = {
                ...action.payload,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            const quizId = action.payload.quizId;
            const topicId = action.payload.topicId
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectAllTopics = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;