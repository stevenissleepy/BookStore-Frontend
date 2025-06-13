import { useState, useEffect } from "react"
import { Card, DatePicker } from "antd"
import { Bar } from "@ant-design/charts"

import { getTop10Books } from "../services/book"

function AdminBookStats() {
  const [data, setData] = useState([])

  useEffect(() => {
    getTop10Books().then(setData)
  }, [])

  function handleSearch(dateRange) {
    getTop10Books(dateRange).then(setData)
  }

  return (
    <Card
      title="购买书籍统计"
      variant="borderless"
      extra={<DatePicker.RangePicker size="large" variant="borderless" onChange={handleSearch} />}
    >
      <Bar data={data} xField={"title"} yField={"sales"} />
    </Card>
  )
}

export default AdminBookStats
