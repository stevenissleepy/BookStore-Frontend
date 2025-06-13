import { Card, DatePicker } from "antd"
import { Bar } from "@ant-design/charts"

function AdminBookStats() {
  const data = [
    { book: "JavaScript高级程序设计", sales: 468 },
    { book: "Vue.js实战", sales: 413 },
    { book: "React开发实战", sales: 268 },
    { book: "Node.js开发指南", sales: 244 },
    { book: "Phon编程", sales: 130 },
    { book: "Pyton编程", sales: 120 },
    { book: "Pyt编程", sales: 110 },
    { book: "Py编程", sales: 10 },
    { book: "Java核心技术", sales: 81 },
  ]

  const config = {
    data,
    xField: "book", // 横轴是数值
    yField: "sales", // 纵轴是分类
  }

  return (
    <Card
      title="购买书籍统计"
      variant="borderless"
      extra={<DatePicker.RangePicker size="large" variant="borderless" />}
    >
      <Bar {...config} />
    </Card>
  )
}

export default AdminBookStats
