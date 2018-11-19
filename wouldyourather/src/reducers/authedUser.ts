import { AuthedUserActionTypes } from '../constants/authedUser';
import { AuthedUserAction } from '../actions/authedUser';
import IAuthedUserState from '../types/authedUserState';

const initialState: IAuthedUserState = {
    userId: ""
}

export default function authedUser(
    state: IAuthedUserState = initialState, 
    action: AuthedUserAction): IAuthedUserState {
        
    switch(action.type) {
        case AuthedUserActionTypes.GET_AUTHED_USER:
            return {
                userId: action.userId
            };
        case AuthedUserActionTypes.SET_AUTHED_USER:
            return {
                userId: action.userId
            };
        default:
            return state;
    }
}