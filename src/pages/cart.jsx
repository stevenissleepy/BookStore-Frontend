import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { CartList, CartListHeader } from "../components/cart_list"

import { getCart } from "../services/cart"

function CartPage() {
  const [cart, setCart] = useState([])
  const [allSelected, setAllSelected] = useState(false)

  /* 初始加载购物车 */
  useEffect(() => {
    getCart().then((cartItems) => {
      setCart(
        cartItems.map((item) => ({
          ...item,
          selected: false,
        }))
      )
    })
  }, [])

  /* 更改商品数量 */
  function handleQuantityChange(id, quantity) {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => (item.book.id === id ? { ...item, quantity: quantity } : item))
        .filter((item) => item.quantity > 0)
      return updatedCart
    })
  }

  /* 更改商品选中状态 */
  function handleSelectChange(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => (item.book.id === id ? { ...item, selected: !item.selected } : item))

      // 检查是否所有商品都被选中
      const allSelected = updatedCart.every((item) => item.selected)

      // 返回更新后的购物车和全选状态
      setAllSelected(allSelected)
      return updatedCart
    })
  }

  function handleSelectAllChange() {
    setAllSelected(!allSelected)
    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        selected: !allSelected,
      }))
    )
  }

  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <CartListHeader allSelected={allSelected} handleSelectAllChange={handleSelectAllChange} />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <CartList cart={cart} handleQuantityChange={handleQuantityChange} handleSelectChange={handleSelectChange} />
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

export default CartPage
