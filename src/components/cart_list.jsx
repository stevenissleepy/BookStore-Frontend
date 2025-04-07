import { List, Row, Col, Checkbox, Button } from "antd"

import CartItem from "./cart_item"

function CartList({ cart, handleQuantityChange }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={(book) => <CartItem book={book} handleQuantityChange={handleQuantityChange} />}
    />
  )
}

function CartListHeader() {
  return (
    <Row justify={"start"} align="middle">
      <Col flex={"30px"}>
        <Checkbox />
      </Col>

      <Col span={2}>
        <h3 className="cart-header-title">Select All</h3>
      </Col>

      <Col span={1} offset={19}>
        <Button type="primary" size="large">
          Checkout
        </Button>
      </Col>
    </Row>
  )
}

export { CartList, CartListHeader }
