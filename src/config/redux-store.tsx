import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {IApplicationState, reducers} from "../store";

export default function configureStore(
		initialState: IApplicationState,
): Store<IApplicationState> {
		// tslint:disable-next-line:typedef
		const composeEnhancers = composeWithDevTools({});

		return createStore(
				reducers,
				initialState,
				composeEnhancers(applyMiddleware(
				)),
			);
}
