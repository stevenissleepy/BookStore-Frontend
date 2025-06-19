import { useState, useEffect } from "react"
import { Card, DatePicker } from "antd"
import { Bar } from "@ant-design/charts"

import { searchTop10Books } from "../services/stats"

function AdminBookStats() {
  const [data, setData] = useState([])

  useEffect(() => {
    searchTop10Books().then(setData)
  }, [])

  function handleSearch(dateRange) {
    searchTop10Books(dateRange).then(setData)
  }

  const config = {
    data,
    xField: "title",
    yField: "sales",
    style: {
      minWidth: 30,
      maxWidth: 30,
    },
    tooltip: [
      (datum) => ({
        name: "销量",
        value: datum.sales + " 本",
      }),
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

export default AdminBookStats
