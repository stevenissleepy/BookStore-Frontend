import { useState, useEffect } from "react"
import { Card, Space, Empty, List, DatePicker } from "antd"

import BookStatsItem from "./book_stats_item"

import { statsBooks } from "../services/order"

function BookStats() {
  const [bookStats, setBookStats] = useState([])

  useEffect(() => {
    statsBooks().then(setBookStats)
  }, [])

  function handleDateChange(dates) {
    statsBooks(dates).then(setBookStats)
  }

  return (
    <Card
      title="购买书籍统计"
      variant="borderless"
      extra={<DatePicker.RangePicker size="large" variant="borderless" onChange={handleDateChange} />}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        {bookStats.length === 0 && <Empty description="无" />}
        {bookStats.length > 0 && (
          <List dataSource={bookStats} renderItem={(statsItem) => <BookStatsItem item={statsItem} />} />
        )}
      </Space>
    </Card>
  )
}

export default BookStats
