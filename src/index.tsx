import React from "react";
import {render} from "react-dom";
import {Provider, Store} from "react-redux";
import { Task } from "redux-saga";
import App from "./app";
import { IUser } from "./common/models/users/list";
import configureStore, { runSagas } from "./config/store/redux";
import { IApplicationState } from "./store";
import { ICounterState } from "./store/counter/types";

const ApplicationInitialState: IApplicationState = {
	counter: { value: 10},
	users: { list :	new Array<IUser>() },
};

const store: Store<IApplicationState> = configureStore(ApplicationInitialState);
const task: Task = runSagas();

render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById("root"));
