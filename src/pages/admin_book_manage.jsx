import { useEffect, useState } from "react"
import { Row, Col, Card } from "antd"

import { AdminLayout } from "../components/layout"
import { AdminBookList, AdminBookListHeader } from "../components/admin_book_list"

import { searchBooks } from "../services/book"

function AdminBookManagePage() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    searchBooks("", [], 0, 100).then(({ books }) => setBooks(books))
  }, [])

  async function handleSearch(query) {
    const { books } = await searchBooks(query, [])
    setBooks(books)
  }

  return (
    <AdminLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookListHeader onSearch={handleSearch} />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookList books={books} />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminBookManagePage
