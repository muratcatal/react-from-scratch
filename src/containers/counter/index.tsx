import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import CounterButton, {ButtonType} from "../../components/counter/button";
import DisplayCounter from "../../components/counter/display";
import { decrementCounter, incrementCounter } from "../../store/counter/actions";
import {ICounterState, IDecrementAction, IIncrementAction} from "../../store/counter/types";
import {IApplicationState} from "../../store/index";

interface ICounterWindowProps { // extends ConnectedReduxProps<ICounterState>
		// write any props used in counter that is different from CounterState
		dummy: number;
}

interface IDispatchProps {
		increment: (amount: number) => void;
		decrement: (amount: number) => void;
}

type AllProps = ICounterWindowProps & ICounterState & IDispatchProps;

const CounterContainer: React.SFC<AllProps> = (props: AllProps) => (
		<div>
				<DisplayCounter count={props.counter}/>
				<CounterButton type={ButtonType.Increment} onClick={() => props.increment(1)}/>
				<CounterButton type={ButtonType.Decrement} onClick={() => props.decrement(1)}/>
		</div>
);

// tslint:disable-next-line:typedef
const mapStateToProps = (state: IApplicationState): ICounterState => state.counter;

// tslint:disable-next-line:typedef
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
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
