import { ActionCreator } from "redux";
import {IGetUsersAction} from "./types";

export const getUsers: ActionCreator<IGetUsersAction> = () => ({
				payload: null,
				type: "@@http-example/GET_USERS",
});
