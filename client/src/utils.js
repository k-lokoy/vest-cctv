const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Des',
]

export const dd = (d) => d < 10 ? '0'+d : d

export const formatDateTime = (date, showDate) => {
  const now = new Date()
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
  const dayMonth = showDate || (now.valueOf() - date.valueOf() > now.valueOf() - midnight.valueOf())
    ?`${date.getDate()} ${months[date.getMonth()]}, ` : ''
  
  return `${dayMonth}${dd(date.getHours())}:${dd(date.getMinutes())}`
}