import {makePageRequestValid} from "../src/ducks/starships/transform-request";
import {REMOTE_REST_URL, REMOTE_REST_URL_INITIAL_PAGE} from "../src/app-constants";

test('get starships transform request', () => {
    const defaultRequest = `${REMOTE_REST_URL}starships/?page=1`;
    const defaultRequestWrongParameter = `${REMOTE_REST_URL}starships/?page=a`;
    expect(makePageRequestValid('a')).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(undefined)).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(null)).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(-100)).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(100)).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(() => {})).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid()).toBe(REMOTE_REST_URL_INITIAL_PAGE);
    expect(makePageRequestValid(defaultRequest)).toBe(defaultRequest);
    expect(makePageRequestValid(defaultRequestWrongParameter)).toBe(defaultRequest);
});
