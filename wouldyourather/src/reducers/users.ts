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
        // case QuestionActionTypes.SAVE_QUESTION:
        //     return {
        //         list: state.list.map(user => {
        //             if (user.id !== action.question.author) {
        //                 return user;
        //             } else {
        //                 return {
        //                     ...user,
        //                     questions: user.questions.concat([action.question.id])
        //                 };
        //             }
        //         })
        //     };
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
        default: 
            return state;
    }
}