import { useEffect, useState } from "react"
import { Row, Col, Card } from "antd"

import { UserLayout } from "../components/layout"
import { AdminBookList, AdminBookListHeader } from "../components/admin_book_list"

import { searchBooks } from "../services/book"

function AdminBookPage() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    searchBooks("").then(setBooks)
  }, [])

  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookListHeader />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookList books={books}/>
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

export default AdminBookPage
