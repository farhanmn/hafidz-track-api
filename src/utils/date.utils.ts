import * as moment from 'moment-timezone';

export function beforeSaveDate(
  date: string,
  addDay?: number,
  format: string = 'YYYY-MM-DD'
): string {
  if (addDay) {
    return moment(date, format).add(addDay, 'days').toISOString();
  } else {
    return moment(date, format).toISOString();
  }
}
