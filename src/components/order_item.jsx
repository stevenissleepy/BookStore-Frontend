import { useState } from "react"
import { Row, Col, List, Checkbox, Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"

import OrderDetailModel from "./order_modal"

function OrderItem({ order }) {
  const [showOrderDetailModal, setShowOrderDetailModal] = useState(false)

  return (
    <List.Item>
      <Row className="order-item" justify={"start"} align="middle">
        {/* show detail */}
        <Col flex={"40px"}>
          <Button shape="circle" icon={<PlusOutlined />} onClick={() => setShowOrderDetailModal(true)} size="small" />
          <OrderDetailModel
            open={showOrderDetailModal}
            onCancel={() => setShowOrderDetailModal(false)}
            orderItems={order.orderItems}
          />
        </Col>

        {/* 订单信息 */}
        <Col span={5}>
          <h3 className="order-item-receiver">{order.receiver}</h3>
          <p className="order-item-tel">{order.tel}</p>
          <p className="order-item-address">{order.address}</p>
        </Col>

        {/* 总价 */}
        <Col span={2} offset={10}>
          <p className="order-item-price">￥{(order.totalPrice / 100).toFixed(2)}</p>
        </Col>

        {/* 日期 */}
        <Col span={2} offset={4}>
          <p className="order-item-date">{order.date}</p>
        </Col>
      </Row>
    </List.Item>
  )
}

export default OrderItem
