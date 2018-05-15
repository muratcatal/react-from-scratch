import { ActionCreator } from "redux";
import { IUser } from "../../common/models/users/list";
import {IGetUsersAction, IGetUsersFetchedAction} from "./types";

export const getUsers: ActionCreator<IGetUsersAction> = () => ({
				payload: null,
				type: "@@http-example/GET_USERS",
});

export const usersFetched: ActionCreator<IGetUsersFetchedAction> = (users: IUser[]) => ({
	payload: {
		list: users,
	},
	type: "@@http-example/USERS_FETCHED",
});
