import moment from 'moment'

const formatTime = time => {
  if (moment(time).format('mm') === '00') {
    return moment(time).format('ha')
  }
  return moment(time).format('h:mma')
}

export default event => {
  const year = moment(event.startTime).year()

  const startDate = moment(event.startTime).format('L')
  const endDate = moment(event.endTime).format('L')

  const startMonth = moment(event.startTime).format('MMM')
  const endMonth = moment(event.endTime).format('MMM')

  const startDay = moment(event.startTime).date()
  const endDay = moment(event.endTime).date()

  const startTime = formatTime(event.startTime)
  const endTime = formatTime(event.endTime)

  if (startDate === endDate) {
    return `${startDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
  } else if (startMonth === endMonth) {
    return `${startDay} - ${endDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
  }
  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year} • ${startTime} - ${endTime}`
}
