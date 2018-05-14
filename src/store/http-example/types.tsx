import { Action } from "redux";
import { IUser } from "../../common/models/users/list";

export interface IUsersState {
    list : Array<IUser>;
}

export interface IGetUsersFetchedAction extends Action {
    type: "@@http-example/USERS_FETCHED";
    payload:{
        list: IUser[]
    };
}

export interface IGetUsersAction extends Action {
    type: "@@http-example/GET_USERS";
    payload:{
        list: IUser[]
    };
}

export type HttpRequestActions = IGetUsersFetchedAction | IGetUsersAction;