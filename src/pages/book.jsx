import { Card, Row, Col } from "antd"
import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"

import { BaseLayout } from "../components/layout"
import BookInfo from "../components/book_info"

import { getBookById } from "../services/book"

function BookPage() {
  /* get book id from url */
  const { id } = useParams()

  /* get book by id */
  const [book, setBook] = useState(null)
  const getBook = useCallback(async () => {
    let book = await getBookById(Number(id))
    setBook(book)
  }, [id])
  useEffect(() => {
    getBook()
  }, [getBook])

  return (
    <BaseLayout>
      {book && (
        <Row gutter={[0, 20]} justify={"center"}>
          <Col span={18}>
            <Card variant="borderless">
              <BookInfo book={book} />
            </Card>
          </Col>
        </Row>
      )}
    </BaseLayout>
  )
}

export default BookPage
