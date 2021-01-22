import * as React from 'react'
import { TableCell, withStyles } from '@material-ui/core'
import { WeatherIcon } from '../Atoms'
import { styles } from '../../styles/styles'
import classNames from 'clsx'

const CellBase = React.memo(({ classes, startDate, formatDate, otherMonth }) => {
  const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3)
  const isFirstMonthDay = startDate.getDate() === 1
  const formatOptions = isFirstMonthDay ? { day: 'numeric', month: 'long' } : { day: 'numeric' }
  return (
    <TableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        [classes.rainBack]: iconId === 0,
        [classes.sunBack]: iconId === 1,
        [classes.cloudBack]: iconId === 2,
        [classes.opacity]: otherMonth,
      })}
      onDoubleClick
    >
      <div className={classes.content}>
        <WeatherIcon classes={classes} id={iconId} />
      </div>
      <div className={classes.text}>{formatDate(startDate, formatOptions)}</div>
    </TableCell>
  )
})

export default withStyles(styles, { name: 'Cell' })(CellBase)
