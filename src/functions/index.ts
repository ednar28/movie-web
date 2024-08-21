import DateFormatter from './formatters/date'
import NumberFormatter from './formatters/number'
import { nanoid } from 'nanoid'

export const fmt = {
  ...DateFormatter,
  ...NumberFormatter,
}

export const randomId = nanoid
