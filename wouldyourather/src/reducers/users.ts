import { UserActionTypes } from '../constants/users';
import { QuestionActionTypes } from '../constants/questions';
import { UserAction } from '../actions/users';
import { QuestionAction} from '../actions/questions';
import UserState from '../types/userState';
import IUser from '../interfaces/users';

const initialState: UserState = {
    users: new Map<string, IUser>()
}

export default function users(
    state: UserState = initialState, 
    action: UserAction | QuestionAction): UserState {
        
    switch(action.type) {
        case UserActionTypes.GET_ALL_USERS:
            return {
                users: action.users
            };
        case QuestionActionTypes.SAVE_QUESTION_ANSWER:
            return {
                users: {
                    ...state.users,
                    [action.authedUser]: {
                        ...state.users[action.authedUser],
                        answers: {
                            ...state.users[action.authedUser].answers,
                            [action.qid]: action.answer
                        }
                    }
                }
            };
        case QuestionActionTypes.SAVE_QUESTION:
            return {
                users: {
                    ...state.users,
                    [action.question.author]: {
                        ...state.users[action.question.author],
                        questions: 
                            state.users[action.question.author]
                                .questions.concat([action.question.id])
                    }
                }
            };
        default: 
            return state;
    }
}