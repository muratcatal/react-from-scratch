import { takeLatest } from "redux-saga/effects";
import { getUsersSaga } from "../user/saga";

// tslint:disable-next-line:typedef
export default function* rootSaga() {
		yield [
			takeLatest("@@http-example/GET_USERS", getUsersSaga),
		];
	}
