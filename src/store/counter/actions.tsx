import { Action } from "redux";

export interface IIncrementAction extends Action {
    type: "@@counter/COUNTER_INCREMENTED";
    payload:{
        incrementAmount: number
    };
}

export interface IDecrementAction extends Action {
    type: "@@counter/COUNTER_DECREMENTED";
    payload:{
        decrementAmount: number
    };
}

export type CounterActions = IIncrementAction | IDecrementAction;