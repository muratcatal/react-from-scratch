import React from "react";
import {render} from "react-dom";
import {Provider, Store} from "react-redux";
import { Task } from "redux-saga";
import App from "./app";
import { IUser } from "./common/models/users/list";
import configureStore, { runSagas } from "./config/store/redux";
import LocalizerContainer from "./containers/localization/localizer";
import { getLocale, Messages } from "./localization";
import { IApplicationState } from "./store";
import { ICounterState } from "./store/counter/types";

const ApplicationInitialState: IApplicationState = {
	counter: { value: 0},
	localization: {
		locale: getLocale(),
		messages: Messages.getMessages(getLocale()),
	},
	users: { list :	new Array<IUser>() },
};

const store: Store<IApplicationState> = configureStore(ApplicationInitialState);
const task: Task = runSagas();

render(
	<Provider store={store}>
		<LocalizerContainer>
			<App />
		</LocalizerContainer>
	</Provider>,
document.getElementById("root"));
