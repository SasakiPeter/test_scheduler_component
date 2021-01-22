import React from 'react'
import { Opacity, WbSunny, FilterDrama } from '@material-ui/icons'

const WeatherIcon = ({ classes, id }) => {
  switch (id) {
    case 0:
      return <Opacity className={classes.rain} fontSize="large" />
    case 1:
      return <WbSunny className={classes.sun} fontSize="large" />
    case 2:
      return <FilterDrama className={classes.cloud} fontSize="large" />
    default:
      return null
  }
}

export default WeatherIcon
