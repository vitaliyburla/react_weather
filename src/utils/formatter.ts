import moment from 'moment';

export const timestampToDatetime = (timestamp: number, format: string) => {
    return moment(moment.utc()).add(timestamp, 'seconds').format(format);
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
