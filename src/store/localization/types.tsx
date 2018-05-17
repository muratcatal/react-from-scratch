import {Action} from "redux";
import LocalizationLanguages from "../../localization/languages";

export interface ILocalizationState {
    messages: object;
    locale: LocalizationLanguages;
}

export interface IChangeLanguage extends Action {
    type: "@@localization/CHANGE_LANGUAGE";
    payload:{
        locale: LocalizationLanguages
    };
}

export type LocalizationActions = IChangeLanguage;