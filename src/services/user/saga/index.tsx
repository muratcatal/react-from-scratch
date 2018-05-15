import { AxiosPromise, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../../../common/models/users/list";
import { usersFetched } from "../../../store/http-example/actions";
import { getUser } from "../api";

// tslint:disable-next-line:typedef
export function* getUsersSaga() {
		const response: AxiosResponse<IUser[]> = yield call(getUser);
		yield put(usersFetched(response.data));
}
