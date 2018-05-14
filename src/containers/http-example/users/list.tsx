import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IUser } from "../../../common/models/users/list";
import Users from "../../../components/http-example/users/list";
import { IApplicationState } from "../../../store";
import { getUsers } from "../../../store/http-example/actions";
import { IUsersState } from "../../../store/http-example/types";
interface IDispatchProps {
		listUsers: () => void;
}

type AllProps = IDispatchProps & IUsersState;

const ListContainer: React.SFC<AllProps> = (props: AllProps) => (
		<Users onList={props.listUsers} users={props.list} />
);

// tslint:disable-next-line:typedef
const mapStateToProps = (state: IApplicationState): IUsersState => state.users;

// tslint:disable-next-line:typedef
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
		return {
			listUsers: () => {
						dispatch(getUsers());
				},
		};
};

export default connect<IUsersState, IDispatchProps>(
		mapStateToProps,
		mapDispatchToProps,
)(ListContainer);
