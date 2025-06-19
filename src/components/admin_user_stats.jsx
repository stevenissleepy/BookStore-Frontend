import { useState, useEffect } from "react"
import { Card, DatePicker, Tooltip } from "antd"
import { Bar } from "@ant-design/charts"

import { searchTop10Users } from "../services/stats"

function AdminUserStats({}) {
  const [data, setData] = useState([])

  useEffect(() => {
    searchTop10Users().then(setData)
  }, [])

  function handleSearch(dateRange) {
    searchTop10Users(dateRange).then(setData)
  }

  const config = {
    data,
    xField: "username",
    yField: "spent",
    style: {
      minWidth: 30,
      maxWidth: 30,
    },
    axis: {
      y: {
        labelFormatter: (value) => {
          return (parseInt(value) / 100).toFixed(0)
        },
      },
    },
    tooltip: [
      (datum)=>({
        name: "消费额",
        value: (parseInt(datum.spent)/100).toFixed(2) + " 元",
      })
    ],
  }

  return (
    <Card
      title="购买书籍统计"
      variant="borderless"
      extra={<DatePicker.RangePicker size="large" variant="borderless" onChange={handleSearch} />}
    >
      <Bar {...config} />
    </Card>
  )
}

export default AdminUserStats
