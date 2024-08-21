import {
  format,
  formatDistanceToNow,
  formatDuration,
  intervalToDuration,
} from 'date-fns'
import { id } from 'date-fns/locale'

export default {
  /**
   * Format date with given string format.
   * See https://date-fns.org/docs/format for accepted tokens
   */
  date: (dt: unknown, fmt: string) => {
    if (
      typeof dt !== 'number' &&
      typeof dt !== 'string' &&
      !(dt instanceof Date)
    ) {
      return '-'
    }
    return format(new Date(dt), fmt, { locale: id })
  },

  /**
   * Get texts of calculation given date from now.
   * e.g: 2 hari yang lalu, kemarin, 5 jam yang lalu.
   * See https://date-fns.org/docs/formatDistanceToNow.
   */
  dateRelative: (dt: unknown, addSuffix = true) => {
    if (
      typeof dt !== 'number' &&
      typeof dt !== 'string' &&
      !(dt instanceof Date)
    ) {
      return '-'
    }

    return formatDistanceToNow(new Date(dt), { locale: id, addSuffix })
  },

  /**
   * Get texts of calculation duration of two dates in human readable format.
   * e.g: 5 bulan 3 hari 2 jam
   * See https://date-fns.org/docs/formatDuration
   */
  duration: (dtStart: unknown, dtEnd: unknown) => {
    if (
      typeof dtStart !== 'number' &&
      typeof dtStart !== 'string' &&
      !(dtStart instanceof Date)
    ) {
      return '-'
    }
    if (
      typeof dtEnd !== 'number' &&
      typeof dtEnd !== 'string' &&
      !(dtEnd instanceof Date)
    ) {
      return '-'
    }

    const duration = intervalToDuration({
      start: new Date(dtStart),
      end: new Date(dtEnd),
    })

    return formatDuration(duration, {
      locale: id,
      // format: ['years', 'months', 'days', 'hours', 'minutes'],
    })
  },
}
