import React from 'react'
import BigCalendar from 'react-big-calendar'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Calendar = () => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    defaultDate={new Date(2015, 3, 1)}
  />
)

export default Calendar;
