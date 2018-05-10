import Typography from "material-ui/Typography";
import React, {Component} from "react";

export interface ICounterProps {
		count: number;
}

class Display extends Component <ICounterProps, {} > {
		public render(): JSX.Element {
				const {count} = this.props;

				return <Typography variant="body2">{count}</Typography>;
		}
}

export default Display;
