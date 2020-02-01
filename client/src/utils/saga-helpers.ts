import {ActionMeta} from "redux-actions";
import {takeEvery} from "redux-saga/effects";

export type ISagaWrapper = (action: ActionMeta<any, any>) => any;

const decoratorsDefault: ISagaDecorator[] = [];

export type ISagaDecorator = (
    target: (action: ActionMeta<any, any>) => any
) => ISagaWrapper;

export const processSagas = (
    sagas: { [index: string]: ISagaWrapper },
    decorators = decoratorsDefault,
    effect = takeEvery
) =>
    Object.keys(sagas).map((actionName: string) =>
        effect(
            actionName,
            decorators.reduce((saga, decorator) => decorator(saga), sagas[actionName])
        )
    );
