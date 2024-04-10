import { Utils } from './utils';

describe('Utils', () => {
    describe('Testing isNullOrUndefined - ', () => {
        [
            { value: false, expected: false },
            { value: true, expected: false },
            { value: 0, expected: false },
            { value: 999, expected: false },
            { value: '', expected: false },
            { value: 'abcd', expected: false },
            { value: null, expected: true },
            { value: undefined, expected: true },
        ].forEach(({ value, expected }) => {
            it(`should return '${expected}' for '${value}'`, () => {
                expect(Utils.isNullOrUndefined(value)).toEqual(expected);
            });
        });
    });
});
