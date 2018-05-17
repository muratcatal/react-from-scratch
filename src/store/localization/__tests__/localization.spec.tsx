import { changeLanguage } from "../actions";
import { Messages } from "../../../localization";
import LocalizationLanguages from "../../../localization/languages";

describe("redux in localization test",()=> {
    test("should ouput en language",()=> {
        const language: string = LocalizationLanguages.En;

        const expectedAction : object = {
            payload:{
                locale : language,
                messages: {
                    "hello" : "Hello"
                }
            },
            type: "@@localization/CHANGE_LANGUAGE"
        };

        expect(changeLanguage(language,Messages.getMessages(language))).toEqual(expectedAction);
    });

    test("should ouput tr language",()=> {
        const language: string = LocalizationLanguages.Tr;

        const expectedAction : object = {
            payload:{
                locale : language,
                messages: {
                    "hello" : "Merhaba"
                }
            },
            type: "@@localization/CHANGE_LANGUAGE"
        };

        expect(changeLanguage(language,Messages.getMessages(language))).toEqual(expectedAction);
    });
});