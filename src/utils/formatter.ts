import moment from 'moment';

export const timestampToDatetimeUTC = (timestamp: number, format: string) => {
    return moment(moment.utc()).add(timestamp, 'seconds').format(format);
};

export const timestampFromUTC = (timestamp: number) => {
    return moment.utc().add(timestamp, 'seconds').unix().valueOf();
};

export const timestampToDatetime = (timestamp: number, format: string) => {
    return moment.unix(timestamp).utc().format(format);
};

export const degToCompass = (angle: number) => {
    const directions = [
        '↑ N',
        '↗ NE',
        '→ E',
        '↘ SE',
        '↓ S',
        '↙ SW',
        '← W',
        '↖ NW',
    ];
    return directions[Math.round(angle / 45) % 8];
};

export const filterByDay = (timestamp: number, timezone: number) => {
    const today = moment().utc().add(timezone, 'seconds').startOf('day');
    return moment.unix(timestamp).utc().startOf('day').isSame(today);
};
