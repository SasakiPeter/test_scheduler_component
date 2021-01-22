# [DevExtream REACTIVE React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/)のテスト使用

## 動かし方

```shell
$ npm install -g yarn
$ yarn
$ yarn start
```

## インストールしたパッケージ

```shell
$ yarn add @devexpress/dx-react-core @devexpress/dx-react-scheduler @devexpress/dx-react-scheduler-material-ui @material-ui/core @material-ui/icons clsx
```

## Issue

- 背景に色を付けて、草生やすみたいにしたい
  - TimeTableComponent を自作するとき、以下の問題に注意
  - ダブルクリックした時、ちゃんと追加のモーダルが起動するか
  - 今日の日付がわかるようになっているか
    - [CurrentTimeIndicator](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/current-time-indication/)か、TableCell の問題か？
    - デバッグに[TodayButton](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/date-navigation/)使うといいかも
- アポクリック時のモーダルをカスタマイズ
  - [AppointmentTooltip](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointment-tooltip/#customize-the-appearance)
- アポ編集画面のカスタマイズ
  - よく使うものとかは、選べるようにする
  - [Customize the Appointment Form](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/editing/#customize-the-appointment-form)
- 削除する時の確認ダイアログをカスタマイズ
- zero duration appointment が monthview では表示されない
  - [zero duration](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointments/#zero-duration-appointments)
  - weekview とかなら表示できる
- [locale](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/reference/scheduler/)をいい感じにしたい
  - ja-JP 悪くないんだけど、日にちにいちいち'日'ってつけるの鬱陶しい
- 追加する時にシングルクリックでいいようにしたい

## 各種リファレンス

### アポ編集画面

アポをクリックした時のモーダルのカスタマイズ

[AppointmentTooltip](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointment-tooltip/#customize-the-appearance)

### アポフォーム編集

アポ編集画面のカスタマイズ

[Customize the Appointment Form](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/editing/#customize-the-appointment-form)
