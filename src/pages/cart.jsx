import { Card, Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import { CartList, CartListHeader } from "../components/cart_list"

import { users } from "../data"

function CartPage() {
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
            <CartList cart={users[0].cart} />
          </Card>
        </Col>
      </Row>
    </MyLayout>
  )
}

export default CartPage
