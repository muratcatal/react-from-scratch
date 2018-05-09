import {Reducer} from "redux";
import {CounterActions, ICounterState} from "./types";

export const initialState: ICounterState = {
		counter: 0,
};

const reducer: Reducer <ICounterState> = (state: ICounterState = initialState, action) => {
		switch ((action as CounterActions).type) {
				case "@@counter/COUNTER_INCREMENTED":
						return {
								...state,
								counter: state.counter + action.payload.incrementAmount,
						};
				case "@@counter/COUNTER_DECREMENTED":
						return {
								...state,
								counter: state.counter - action.payload.decrementAmount,
						};
				default:
						return state;
		}
};

export default reducer;
