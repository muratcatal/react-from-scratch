import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "../../services/sagas/index";
import { IApplicationState, reducers } from "../../store";

export const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

// tslint:disable-next-line:typedef
export const runSagas = () => sagaMiddleware.run(sagas);

export default function configureStore(
		initialState: IApplicationState,
): Store<IApplicationState> {
		// tslint:disable-next-line:typedef
		const composeEnhancers = composeWithDevTools({});

		return createStore(
				reducers,
				initialState,
				composeEnhancers(applyMiddleware(
					sagaMiddleware,
				)),
			);
}
