import React, {Component} from "react";
import { Roles } from "./roles";
import { Sex } from "./sex";

export interface IAppProps {
	 name: string;
	surname: string;
	role: Roles;
	age?: number; // optional,
	readonly sex: Sex;
}

class App extends Component<IAppProps, {}> {
	public format = (name: string, surname: string, role: Roles): string => {
		return `Dear, ${name} ${surname}, your role is ${role}`;
	}

	public error = (message: string): never => {
		throw new Error(message);
	}

	public render() {
		const {name, surname, role} = this.props;

		return <h1>{this.format(name, surname, role)}</h1>;
	}
}

export default App;
