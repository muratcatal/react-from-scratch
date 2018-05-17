import React from "react";
import {IntlProvider} from "react-intl";
import {connect} from "react-redux";
import { IApplicationState } from "../../store";
import { ILocalizationState } from "../../store/localization/types";

interface ILocalizerProps {
		locale: string;
		messages: object;
		children: any;
}

type AllProps = ILocalizerProps;

const LocalizerContainer: React.SFC<AllProps> = (props: AllProps) => (
		<IntlProvider locale={props.locale} messages={props.messages}>
				{props.children}
		</IntlProvider>
);

const mapStateToProps: (state: IApplicationState) => ILocalizationState = (state: IApplicationState):
ILocalizationState => state.localization;

export default connect<ILocalizationState, ILocalizerProps>(
		mapStateToProps,
)(LocalizerContainer);
