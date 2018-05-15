import axios, {AxiosPromise, AxiosResponse} from "axios";
import { IUser } from "../../../common/models/users/list";
import Api from "../../../config/api";

export const getUser:() => AxiosPromise<IUser[]> = () => axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
