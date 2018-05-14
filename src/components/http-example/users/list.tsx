import React, {Component} from "react";
import { IUser } from "../../../common/models/users/list";

export interface IUserProps {
		onList: () => void;
		users?: IUser[];
}

class Users extends Component<IUserProps, {}> {
		public componentDidMount(): void {
				const {onList} = this.props;
				onList();
		}
		public render(): JSX.Element {
				const {users} = this.props;

				return (<>
				{
						users.map((user) => (
								<div key={user.id}>{user.id} - {user.name} - {user.email}</div>
						))
				}</>);
		}
}

export default Users;
