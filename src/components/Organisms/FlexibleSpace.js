import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui'
import { withStyles, Typography } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { styles } from '../../styles/styles'

export default withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      <DateRangeIcon fontSize="large" htmlColor="#FF7043" />
      <Typography variant="h5" style={{ marginLeft: '10px' }}>
        Muscle Calender
      </Typography>
    </div>
  </Toolbar.FlexibleSpace>
))
