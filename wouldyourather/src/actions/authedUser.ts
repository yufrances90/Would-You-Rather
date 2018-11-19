import { AuthedUserActionTypes } from '../constants/authedUser';

export interface IGetAuthedUser {
    type: AuthedUserActionTypes.GET_AUTHED_USER,
    userId: string
}

export interface ISetAuthedUser {
    type: AuthedUserActionTypes.SET_AUTHED_USER,
    userId: string
}

export type AuthedUserAction = IGetAuthedUser | ISetAuthedUser;

export function getAuthedUser(userId: string): IGetAuthedUser {
    return {
        type: AuthedUserActionTypes.GET_AUTHED_USER,
        userId
    }
}

export function setAuthedUser(userId: string): ISetAuthedUser {
    return {
        type: AuthedUserActionTypes.SET_AUTHED_USER,
        userId
    }
}