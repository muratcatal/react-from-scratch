import {Reducer} from "redux";
import { IUser } from "../../common/models/users/list";
import {HttpRequestActions, IUsersState} from "./types";

export const initialState: IUsersState = {
		list: new Array<IUser>(),
};

const reducer: Reducer <IUsersState> = (state: IUsersState = initialState, action) => {
		switch ((action as HttpRequestActions).type) {
				case "@@http-example/USERS_FETCHED":
						return {
							...state,
							list: action.payload.users,
						};
				default:
						return state;
		}
};

export default reducer;
