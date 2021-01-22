import { Appointments } from '@devexpress/dx-react-scheduler-material-ui'
import { withStyles } from '@material-ui/core'
import { styles } from '../../styles/styles'

const AppoinementBaseComponent = ({ classes, ...restProps }) => (
  <Appointments.Appointment {...restProps} className={classes.appointment} />
)

export default withStyles(styles, { name: 'Appointment' })(AppoinementBaseComponent)
