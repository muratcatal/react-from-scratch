import {combineReducers, Dispatch, Reducer} from "redux";

import counterReducer from "./counter/reducer";
import {ICounterState} from "./counter/types";

export interface IApplicationState {
		counter: ICounterState;
}

export const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
		counter: counterReducer,
});
