import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import { CartList, CartListHeader } from "../components/cart_list"

import { getCart } from "../services/cart"

function CartPage() {
  const [cart, setCart] = useState([])

  // 初始加载购物车
  useEffect(() => {
    getCart().then(setCart)
  }, [])

  return (
    <MyLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <CartListHeader />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <CartList cart={cart} />
          </Card>
        </Col>
      </Row>
    </MyLayout>
  )
}

export default CartPage
