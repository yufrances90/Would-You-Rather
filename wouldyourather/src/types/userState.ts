import IUser from '../interfaces/users';

export default interface IUserState {
    readonly users: Map<string, IUser>
}