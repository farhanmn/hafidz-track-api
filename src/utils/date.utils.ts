import * as moment from 'moment-timezone';

export function toDate(date: Date, format?: string) {
  return moment.tz(date, 'Asia/Jakarta').format(format ?? 'YYYY-MM-DD');
}
