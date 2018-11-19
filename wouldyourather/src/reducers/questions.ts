import { QuestionActionTypes } from '../constants/questions';
import { QuestionAction } from '../actions/questions';
import QuestionState from '../types/questionState';

const initialState: QuestionState = {
    list: []
}

export default function questions(
    state: QuestionState = initialState, 
    action: QuestionAction): QuestionState {
        
    switch(action.type) {
        case QuestionActionTypes.GET_ALL_QUESTIONS:
            return {
                list: action.questions
            };
        case QuestionActionTypes.SAVE_QUESTION:
            return {
                list: state.list.concat([action.question])
            };
        case QuestionActionTypes.SAVE_QUESTION_ANSWER:
            return {
                list: state.list.map(question => {
                    if (question.id !== action.qid) {
                        return question;
                    } else {
                        return {
                            ...question,
                            [action.answer]: {
                                ...question[action.answer],
                                votes: question[action.answer].votes.concat([action.authedUser])
                            }
                        }
                    }
                })
            };
        default:
            return state;
    }
}