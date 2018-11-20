import { UserActionTypes} from '../constants/users';
import IUser from '../interfaces/users';

export interface IGetAllUsers {
    type: UserActionTypes.GET_ALL_USERS,
    users: Map<string, IUser>
}

export type UserAction = IGetAllUsers;

export function getAllUsers(users: Map<string, IUser>): IGetAllUsers {
    return {
        type: UserActionTypes.GET_ALL_USERS,
        users
    };
}