import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(isSameOrBefore)
dayjs.extend(isBetween)

//--------------------------------------------------------------------
export const getNowFormat = (opts: { format?: string }) => {
  const { format = 'YYYY-MM-DD' } = opts
  return dayjs().format(format)
}
