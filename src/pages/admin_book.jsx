import { Card, Row, Col } from "antd"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { AdminLayout } from "../components/layout"
import AdminBookInfo from "../components/admin_book_info"

import { getBookById } from "../services/book"

function AdminBookPage() {
  // get book id from url
  const { id } = useParams()
  const [book, setBook] = useState(null)

  // get book by id
  useEffect(() => {
    getBookById(Number(id)).then(setBook)
  }, [id])

  return (
    <AdminLayout>
      {book && (
        <Row gutter={[0, 20]} justify={"center"}>
          <Col span={18}>
            <Card variant="borderless">
              <AdminBookInfo book={book} />
            </Card>
          </Col>
        </Row>
      )}
    </AdminLayout>
  )
}

export default AdminBookPage
