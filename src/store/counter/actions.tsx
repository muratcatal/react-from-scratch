import { ActionCreator } from "redux";
import {IDecrementAction, IIncrementAction} from "./types";

export const decrementCounter: ActionCreator<IDecrementAction> = (decrementAmount: number) => ({
		payload: {
				decrementAmount,
		},
		type: "@@counter/COUNTER_DECREMENTED",
});

export const incrementCounter: ActionCreator<IIncrementAction> = (incrementAmount: number) => ({
		payload: {
				incrementAmount,
		},
		type: "@@counter/COUNTER_INCREMENTED",
});
