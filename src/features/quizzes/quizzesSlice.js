import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/topicsSlice"

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const id = action.payload.id
            state.quizzes[id] = action.payload;
        }
    }
})

export const selectAllQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

export const createNewQuiz = (quiz) => {
    return async (dispatch) => {
        await dispatch(addQuiz(quiz));
        await dispatch(addQuizId({
            quizId: quiz.id,
            topicId: quiz.topicId
        }));
    }
}