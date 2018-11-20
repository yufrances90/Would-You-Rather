import { QuestionActionTypes } from '../constants/questions';
import { QuestionAction } from '../actions/questions';
import QuestionState from '../types/questionState';
import IQuestion from '../interfaces/questions';

const initialState: QuestionState = {
    questions: new Map<string, IQuestion>()
}

export default function questions(
    state: QuestionState = initialState, 
    action: QuestionAction): QuestionState {
        
    switch(action.type) {
        case QuestionActionTypes.GET_ALL_QUESTIONS:
            return {
                questions: action.questions
            };
        case QuestionActionTypes.SAVE_QUESTION:
            return {
                questions: {
                    ...state.questions,
                    [action.question.id]: action.question
                }
            };
        case QuestionActionTypes.SAVE_QUESTION_ANSWER:
            return {
                questions: {
                    ...state.questions,
                    [action.qid]: {
                        ...state.questions[action.qid],
                        [action.answer]: {
                            ...state.questions[action.qid][action.answer],
                            votes: state.questions[action.qid][action.answer].votes.concat([action.authedUser])
                        }
                    }
                }
            };
        default:
            return state;
    }
}