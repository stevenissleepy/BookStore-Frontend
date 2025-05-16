import { Card, Row, Col, message } from "antd"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { UserLayout } from "../components/layout"
import BookInfo from "../components/book_info"

import { getBookById } from "../services/book"
import { addToCart } from "../services/cart"
import { handleApiResponse } from "../utils/message"

function BookPage() {
  /* get book id from url */
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  /* get book by id */
  useEffect(() => {
    getBookById(Number(id)).then(setBook)
  }, [id])

  /* handle add to cart*/
  function handleAddToCart() {
    addToCart(book.id, 1).then((ok) =>
      handleApiResponse(ok, messageApi, "成功添加到购物车", "添加到购物车失败")
    )
  }

  return (
    <UserLayout>
      {contextHolder}
      {book && (
        <Row gutter={[0, 20]} justify={"center"}>
          <Col span={18}>
            <Card variant="borderless">
              <BookInfo book={book} handleAddToCart={handleAddToCart} />
            </Card>
          </Col>
        </Row>
      )}
    </UserLayout>
  )
}

export default BookPage
