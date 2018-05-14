import {combineReducers, Dispatch, Reducer} from "redux";

import counterReducer from "./counter/reducer";
import {ICounterState} from "./counter/types";
import usersReducer from "./http-example/reducer";
import { IUsersState } from "./http-example/types";

export interface IApplicationState {
		counter: ICounterState;
		users: IUsersState;
}

export const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
		counter: counterReducer,
		users: usersReducer,
});
