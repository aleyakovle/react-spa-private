export type ILanguageType = 'en-EN' | 'de-DE' | 'ru-RU';

export interface IUIManagerState {
    language: ILanguageType;
    errorMessage?: string;
    [key: string]: any;
}
