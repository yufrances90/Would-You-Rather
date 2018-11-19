import { UserActionTypes } from '../constants/users';
import { QuestionActionTypes } from '../constants/questions';
import { UserAction } from '../actions/users';
import { QuestionAction} from '../actions/questions';
import UserState from '../types/userState';

const initialState: UserState = {
    list: []
}

export default function users(
    state: UserState = initialState, 
    action: UserAction | QuestionAction): UserState {
        
    switch(action.type) {
        case UserActionTypes.GET_ALL_USERS:
            return {
                list: action.users
            };
        case QuestionActionTypes.SAVE_QUESTION:
            return {
                list: state.list.map(user => {
                    if (user.id !== action.question.author) {
                        return user;
                    } else {
                        return {
                            ...user,
                            questions: user.questions.concat([action.question.id])
                        };
                    }
                })
            };
        case QuestionActionTypes.SAVE_QUESTION_ANSWER:
            return {
                list: state.list.map(user => {
                    if (user.id !== action.authedUser) {
                        return user;
                    } else {
                        return {
                            ...user,
                            answers: {
                                ...user.answers,
                                [action.qid]: action.answer
                            }
                        }
                    }
                })
            };
        default: 
            return state;
    }
}