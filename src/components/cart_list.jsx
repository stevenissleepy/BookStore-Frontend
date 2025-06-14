import { List, Row, Col, Checkbox, Button, message } from "antd"
import { useContext, useState } from "react"

import CartItem from "./cart_item"
import CheckoutModal from "./checkout_modal"

import { checkout } from "../services/order"
import { handleApiResponse } from "../utils/message"
import { CartContext } from "../utils/context"

function CartList() {
  const { cart, handleQuantityChange, handleSelectChange } = useContext(CartContext)
  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={(cartItem) => (
        <CartItem
          cartItem={cartItem}
          handleQuantityChange={handleQuantityChange}
          handleSelectChange={handleSelectChange}
        />
      )}
    />
  )
}

function CartListHeader() {
  const { cart, allSelected, handleSelectAllChange } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  function handleCheckboxChange() {
    handleSelectAllChange()
  }

  function handleCheckoutClick() {
    const selectedItems = cart.filter((item) => item.selected)
    if (selectedItems.length === 0) {
      messageApi.error("请至少选择一件商品", 0.7)
      return
    }
    setShowModal(true)
  }

  function handleCheckoutOk(addr) {
    const bookIds = cart.filter((item) => item.selected).map((item) => item.book.id)
    const { receiver, tel, address } = addr
    checkout(receiver, tel, address, bookIds)
      .then((ok) => handleApiResponse(ok, messageApi, "下单成功", "下单失败"))
      .finally(() => {
        window.location.reload()
        setShowModal(false)
      })
  }

  function handleCheckoutCancel() {
    setShowModal(false)
  }

  return (
    <>
      <CheckoutModal open={showModal} onOk={handleCheckoutOk} onCancel={handleCheckoutCancel} />

      {contextHolder}
      <Row justify={"start"} align="middle">
        <Col flex={"30px"}>
          <Checkbox checked={allSelected} onChange={handleCheckboxChange} />
        </Col>

        <Col span={2}>
          <h3 className="cart-header-title">Select All</h3>
        </Col>

        <Col span={1} offset={19}>
          <Button type="primary" size="large" onClick={handleCheckoutClick}>
            Checkout
          </Button>
        </Col>
      </Row>
    </>
  )
}

export { CartList, CartListHeader }
