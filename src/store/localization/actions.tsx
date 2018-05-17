import { ActionCreator } from "redux";
import LocalizationLanguages from "../../localization/languages";
import {IChangeLanguage} from "./types";

export const changeLanguage: ActionCreator<IChangeLanguage> = (locale: LocalizationLanguages) => ({
		payload: {
				locale,
		},
		type: "@@localization/CHANGE_LANGUAGE",
});
