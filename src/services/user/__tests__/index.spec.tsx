import { getUsersSaga } from "../saga";
import { usersFetched } from "../../../store/http-example/actions";
import { getUser } from "../api";
import { testSaga } from "redux-saga-test-plan";

describe("user api tests",()=> {
    test("users fetched", ()=> {
        testSaga(getUsersSaga).next().call(getUser).next({"type": "test"}).put(usersFetched(undefined)).next().isDone();
    });
});