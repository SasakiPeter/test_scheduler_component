import * as React from 'react'
import { Paper } from '@material-ui/core'
import { EditingState, ViewState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  // CurrentTimeIndicator,
  // EditRecurrenceMenu,
  // DragDropProvider,
  // WeekView,
  // ViewSwitcher,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui'
import {
  // TimeTableCell,
  Appointment,
  AppointmentContent,
  FlexibleSpace,
} from './components/Organisms'

const appointments = [
  {
    id: 0,
    title: '腕立て伏せ(1/2)',
    startDate: new Date(2021, 0, 20, 21, 0),
    endDate: new Date(2021, 0, 20, 21, 5),
    tagId: 4,
  },
  {
    id: 1,
    title: '腕立て伏せ(2/2)',
    startDate: new Date(2021, 0, 20, 21, 0),
    endDate: new Date(2021, 0, 20, 21, 5),
    tagId: 4,
  },
  {
    id: 2,
    title: '腹筋(1/2)',
    startDate: new Date(2021, 0, 20, 21, 0),
    endDate: new Date(2021, 0, 20, 21, 5),
    tagId: 2,
  },
  {
    id: 3,
    title: '腹筋(2/2)',
    startDate: '2021-01-23T21:00',
    endDate: '2021-01-23T21:05',
    tagId: 2,
  },
  {
    id: 4,
    title: '腕立て伏せ(1/2)',
    startDate: new Date(2021, 0, 17, 21, 0),
    endDate: new Date(2021, 0, 17, 21, 5),
    tagId: 4,
  },
  {
    id: 5,
    title: '腕立て伏せ(1/2)',
    startDate: new Date(2021, 0, 14, 21, 0),
    endDate: new Date(2021, 0, 14, 21, 5),
    tagId: 4,
  },
  {
    id: 6,
    title: 'スクワット(1/2)',
    startDate: new Date(2021, 0, 14, 21, 0),
    endDate: new Date(2021, 0, 14, 21, 5),
    tagId: 1,
  },
  {
    id: 7,
    title: '背筋(1/2)',
    startDate: new Date(2021, 0, 12, 21, 0),
    endDate: new Date(2021, 0, 12, 21, 5),
    tagId: 3,
  },
  {
    id: 8,
    title: '腕立て伏せ(1/2)',
    startDate: new Date(2021, 0, 12, 21, 0),
    endDate: new Date(2021, 0, 12, 21, 5),
    tagId: 4,
  },
]

const tags = [
  {
    text: 'スクワット',
    id: 1,
    color: '#7E57C2',
  },
  {
    text: '腹筋',
    id: 2,
    color: '#FF7043',
  },
  {
    text: '背筋',
    id: 3,
    color: '#E91E63',
  },
  {
    text: '腕立て伏せ',
    id: 4,
    color: '#FFA726',
  },
  {
    text: 'サーキット',
    id: 5,
    color: '#AB47BC',
  },
]

const resources = [
  {
    fieldName: 'tagId',
    title: 'タグ',
    instances: tags,
  },
]

// const DayScaleCell = (props) => (
//   <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
// )

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: appointments,
    }
  }

  commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0
        data = [...data, { id: startingAddedId, ...added }]
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        )
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted)
      }
      return { data }
    })
  }

  render() {
    const { data } = this.state
    return (
      <Paper>
        <Scheduler
          data={data}
          // locale={'ja-JP'}
        >
          <EditingState onCommitChanges={this.commitChanges} />
          <ViewState
          // defaultCurrentDate="2018-07-17"
          />

          <MonthView
          // 一つ一つのセルの背景を決められる
          // timeTableCellComponent={TimeTableCell}
          // dayScaleCellComponent={DayScaleCell}
          />

          {/* <WeekView/> */}

          <Toolbar flexibleSpaceComponent={FlexibleSpace} />
          <DateNavigator />
          <TodayButton />

          {/* 繰り返しのアポがある時にいれるやつ 一括操作ができる */}
          {/* <EditRecurrenceMenu /> */}

          {/* 繰り返さないとき 削除の時の確認も必要 */}
          <IntegratedEditing />
          <ConfirmationDialog
            // 追加フォームを閉じるときは無視
            ignoreCancel
          />

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          {/* アポクリックで、表示するモーダル */}
          <AppointmentTooltip
            // 表示するアイコン 内容も変えられそう
            showCloseButton
            showDeleteButton
            showOpenButton
          />
          {/* アポを編集するフォームが出る これに何を載せるか考えたい */}
          <AppointmentForm />

          <Resources data={resources} />

          {/* ドラッグドロップ必要か？ */}
          {/* <DragDropProvider /> */}

          {/* <CurrentTimeIndicator
            // updateInterval={}
            /> */}

          {/* <ViewSwitcher/> */}
        </Scheduler>
      </Paper>
    )
  }
}
