import { Card, Row, Col, message } from "antd"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { UserLayout } from "../components/layout"
import BookInfo from "../components/book_info"

import { getBookById } from "../services/book"
import { addToCart } from "../services/cart"
import { handleApiResponse } from "../utils/message"

function BookPage() {
  // get book id from url
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  // get book by id
  useEffect(() => {
    getBookById(Number(id)).then(setBook)
  }, [id])

  function handleAddToCart() {
    addToCart(book.id, 1).then((ok) => handleApiResponse(ok, messageApi, "成功添加到购物车", "添加到购物车失败"))
  }

  function handleBuyNow() {
    addToCart(book.id, 1).then((ok) => handleApiResponse(ok, null, null, null, () => navigate("/cart")))
  }

  return (
    <UserLayout>
      {contextHolder}
      {book && (
        <Row gutter={[0, 20]} justify={"center"}>
          <Col span={18}>
            <Card variant="borderless">
              <BookInfo book={book} handleAddToCart={handleAddToCart} handleBuyNow={handleBuyNow} />
            </Card>
          </Col>
        </Row>
      )}
    </UserLayout>
  )
}

export default BookPage
