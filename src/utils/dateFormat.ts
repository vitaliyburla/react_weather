import moment from 'moment';

export const timestampToDatetime = (timestamp: number, format: string) => {
    return moment(moment.utc()).add(timestamp, 'seconds').format(format);
};
