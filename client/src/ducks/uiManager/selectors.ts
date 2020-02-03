import {createSimpleSelector} from "utils/selector-helpers";
import {ILanguageType} from "dtos/uiManager";

export const makeGetLanguage = () =>
    createSimpleSelector<ILanguageType>(
        ({uiManager}) => uiManager.language
    );

export const makeGetErrorMessage = () =>
    createSimpleSelector<string | undefined>(
        ({uiManager}) => uiManager.errorMessage
    );
