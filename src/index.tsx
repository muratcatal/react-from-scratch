import React from "react";
import {render} from "react-dom";
import {Provider, Store} from "react-redux";
import configureStore from "./config/redux-store";
import Counter from "./containers/counter";
import { IApplicationState } from "./store";
import { ICounterState } from "./store/counter/types";

const ApplicationInitialState: IApplicationState = {
	counter: { value: 10},
};

const store: Store<IApplicationState> = configureStore(ApplicationInitialState);

render(
	<Provider store={store}>
		<Counter dummy={ApplicationInitialState.counter.value}/>
	</Provider>,
document.getElementById("root"));
