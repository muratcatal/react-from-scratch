import Typography from "material-ui/Typography";
import React, {Component} from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

export interface ICounterProps {
		count: number;
}

class Display extends Component <ICounterProps, {} > {
		public render(): JSX.Element {
				const {count} = this.props;

				return (
					<>
					<Typography variant="title"><FormattedMessage id="count" values={{count}} /></Typography>
					<FormattedDate
						value={new Date()}
						year="numeric"
						month="long"
						day="numeric"
						weekday="long"
					/>
					<Typography variant="body2">{count}</Typography>
					</>
				);
		}
}

export default Display;
