import {Reducer} from "redux";
import { getLocale, Messages } from "../../localization";
import { ILocalizationState, LocalizationActions } from "./types";

export const initialState: ILocalizationState = {
		locale: getLocale(),
		messages: Messages.getMessages(getLocale()),
};

const reducer: Reducer<ILocalizationState> =
(state: ILocalizationState = initialState, action: LocalizationActions) => {
		switch (action.type) {
				case "@@localization/CHANGE_LANGUAGE":
						return {
								...state,
								locale: action.payload.locale,
								messages: Messages.getMessages(action.payload.locale),
						};
				default:
						return state;
		}
};

export default reducer;
