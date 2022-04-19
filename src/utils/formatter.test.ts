import {
    timezoneToDatetimeUTC,
    timestampFromUTC,
    timestampToDatetime,
    filterByDay,
    degToCompass,
} from './formatter';

describe('timezoneToDatetimeUTC', () => {
    beforeEach(() => {});
    test('timezoneToDatetimeUTC format length 10', () => {
        const timezone = -14400;
        const format = 'YYYY-MM-DD';
        const actual = timezoneToDatetimeUTC(timezone, format);
        expect(actual.length).toBe(10);
    });

    test('timezoneToDatetimeUTC format length 4', () => {
        const timezone = -14400;
        const format = 'YYYY';
        const actual = timezoneToDatetimeUTC(timezone, format);
        expect(actual.length).toBe(4);
    });
});

describe('timestampFromUTC', () => {
    test('timestampFromUTC correct timestamp (seconds) length', () => {
        const timezone = -14400;
        const actual = timestampFromUTC(timezone);
        expect(actual.toString().length).toBe(10);
    });
});

describe('timestampToDatetime', () => {
    test('timestampToDatetime format length', () => {
        const timestamp = 1650358800;
        const format = 'YYYY-MM-DD';
        const actual = timestampToDatetime(timestamp, format);
        expect(actual.length).toBe(10);
    });
});

describe('filterByDay', () => {
    test('filterByDay validate true', () => {
        const timestamp = 1650358800;
        const timezone = -14400;
        const actual = filterByDay(timestamp, timezone);
        expect(actual).toBe(true);
    });
    test('filterByDay validate false', () => {
        const timestamp = 1640358800;
        const timezone = -14400;
        const actual = filterByDay(timestamp, timezone);
        expect(actual).toBe(false);
    });
});

describe('degToCompass', () => {
    test('degToCompass 180 degrees', () => {
        const degrees = 180;
        const actual = degToCompass(degrees);
        expect(actual).toBe('↓ S');
    });
    test('degToCompass 10 degrees', () => {
        const degrees = 10;
        const actual = degToCompass(degrees);
        expect(actual).toBe('↑ N');
    });
});
