import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import CounterButton, {ButtonType} from "../../components/counter/button";
import DisplayCounter from "../../components/counter/display";
import { decrementCounter, incrementCounter } from "../../store/counter/actions";
import {ICounterState, IDecrementAction, IIncrementAction} from "../../store/counter/types";
import {IApplicationState} from "../../store/index";

interface ICounterWindowProps {
		// write any props used in counter that is different from CounterState
		dummy: number;
}

interface IDispatchProps {
		increment: (amount: number) => void;
		decrement: (amount: number) => void;
}

type AllProps = ICounterWindowProps & ICounterState & IDispatchProps;

const CounterContainer: React.SFC<AllProps> = (props: AllProps) => (
		<>
				<DisplayCounter count={props.value}/>
				<CounterButton type={ButtonType.Increment} onClick={() => props.increment(1)}/>
				<CounterButton type={ButtonType.Decrement} onClick={() => props.decrement(1)}/>
		</>
);

const mapStateToProps:(state: IApplicationState) => ICounterState = (state: IApplicationState): ICounterState => state.counter;


const mapDispatchToProps:(dispatch: Dispatch) => IDispatchProps = (dispatch: Dispatch): IDispatchProps => {
		return {
			decrement: (amount: number) => {
					dispatch(decrementCounter(amount));
			},
			increment: (amount: number) => {
				dispatch(incrementCounter(amount));
			},
		};
};

export default connect<ICounterState, IDispatchProps, ICounterWindowProps>(
	mapStateToProps,
 	mapDispatchToProps,
)(CounterContainer);
