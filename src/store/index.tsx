import {combineReducers, Dispatch, Reducer} from "redux";

import {ICounterState} from "./counter/types";
import counterReducer from "./counter/reducer";

export interface IApplicationState {
    counter: ICounterState;
}

export const reducers : Reducer<IApplicationState> = combineReducers<IApplicationState>({
    counter: counterReducer
});