import { List, Row, Col } from "antd"

import OrderItem from "./order_item"

function OrderList({ orders }) {
  return <List itemLayout="horizontal" dataSource={orders} renderItem={(order) => <OrderItem order={order} />} />
}

function OrderListHeader() {
  return (
    <Row justify={"start"} align="middle">
      {/* 调整位置 */}
      <Col flex={"20px"}></Col>

      <Col span={2}>
        <h3 className="order-header-title">All Orders</h3>
      </Col>
    </Row>
  )
}

export { OrderList, OrderListHeader }
