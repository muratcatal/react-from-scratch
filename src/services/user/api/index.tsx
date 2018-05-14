import axios, {AxiosPromise, AxiosResponse} from "axios";
import { IUser } from "../../../common/models/users/list";
import Api from "../../../config/api";

// tslint:disable-next-line:typedef
export const getUser = (): AxiosPromise<IUser[]> => axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
