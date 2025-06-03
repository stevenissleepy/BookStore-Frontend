import { useState, useEffect } from "react"
import { Card, Button, Space, Empty, List } from "antd"

import { statsBooks } from "../services/order"

function BookStats() {
  const [bookStats, setBookStats] = useState([])

  useEffect(() => {
    statsBooks().then(setBookStats)
  }, [])

  return (
    <Card title="购买书籍统计" extra={<Button type="primary">添加</Button>}>
      <Space direction="vertical" style={{ width: "100%" }}>
        {bookStats.length === 0 && <Empty description="无" />}
        {bookStats.length > 0 && (
          <List
            dataSource={bookStats}
            renderItem={(statsItem) => (
              <List.Item>
                <List.Item.Meta title={statsItem.book.title} />
              </List.Item>
            )}
          />
        )}
      </Space>
    </Card>
  )
}

export default BookStats
