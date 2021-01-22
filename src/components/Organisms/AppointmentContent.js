import { Appointments } from '@devexpress/dx-react-scheduler-material-ui'
import { withStyles } from '@material-ui/core'
import { styles } from '../../styles/styles'

const AppoinementContentBaseComponent = ({ classes, ...restProps }) => (
  <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
)

export default withStyles(styles, { name: 'AppointmentContent' })(AppoinementContentBaseComponent)
