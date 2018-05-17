import { addLocaleData } from "react-intl";

// for local date, numberic conversations needed!
import enLocale from "react-intl/locale-data/en";
import trLocale from "react-intl/locale-data/tr";
import LocalizationLanguages from "./languages";

export class Messages {
				public static getMessages(language: LocalizationLanguages): object {
						switch (language) {
								case LocalizationLanguages.En:
												return this.en;
								case LocalizationLanguages.Tr:
																return this.tr;
								default:
																return this.tr;
						}
				}

		private static en: object = require("./translations/en");
		private static tr: object = require("./translations/tr");

}

const locales: any = {
		en: enLocale,
		tr: trLocale,
};
addLocaleData([...enLocale, ...trLocale]);

const DEFAULT_LOCALE: string = "tr";

export const getLocale: () => string = () => {
		const langCode: string = navigator.language;
		const locale: string = langCode.split("-")[0];
		return locales[locale] ? locale : DEFAULT_LOCALE;
};
