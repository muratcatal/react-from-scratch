import { AxiosPromise, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../../../common/models/users/list";
import { getUser } from "../api";

// tslint:disable-next-line:typedef
export function* getUsersSaga() {
		const response: AxiosResponse<IUser[]> = yield call(getUser);
		yield put({type: "@@http-example/USERS_FETCHED", payload: {users: response.data}});
}
