import Button from "material-ui/Button";
import React, {Component} from "react";

export enum ButtonType {
		Increment,
		Decrement,
}

export interface IButtonProps {
		type: ButtonType;
		onClick: () => void;
}

class CounterButton extends Component <IButtonProps, {} > {
		public render(): JSX.Element {
				const {type, onClick} = this.props;

				if (type === ButtonType.Increment) {
						return <Button color="primary" onClick={onClick}>+</Button>;
				} else {
						return <Button color="secondary" onClick={onClick}>-</Button>;
				}
		}
}

export default CounterButton;
