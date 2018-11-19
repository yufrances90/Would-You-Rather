import { UserActionTypes} from '../constants/users';
import IUser from '../interfaces/users';

export interface IGetAllUsers {
    type: UserActionTypes.GET_ALL_USERS,
    users: IUser[]
}

export type UserAction = IGetAllUsers;

export function getAllUsers(users: IUser[]): IGetAllUsers {
    return {
        type: UserActionTypes.GET_ALL_USERS,
        users
    };
}