import { useEffect, useState } from "react"
import { Row, Col, Card } from "antd"

import { AdminLayout } from "../components/layout"
import { AdminBookList, AdminBookListHeader } from "../components/admin_book_list"

import { searchBooks } from "../services/book"

function AdminBookManagePage() {
  const [books, setBooks] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [query, setQuery] = useState("")

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadMoreBooks() {
    if (loading) return
    setLoading(true)
    const response = await searchBooks(query, [], page, 8)
    const newBooks = response.books || []
    setBooks((books) => [...books, ...newBooks])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    searchBooks("", [], 0, 8).then(({ quantity, books }) => {
      setQuantity(quantity)
      setBooks(books)
    })
  }, [])

  useEffect(() => {
    searchBooks(query, [], 0, 8).then(({ quantity, books }) => {
      setQuantity(quantity)
      setBooks(books)
    })
  }, [query])

  return (
    <AdminLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookListHeader onSearch={setQuery} />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookList books={books} quantity={quantity} loadMoreBooks={loadMoreBooks} />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminBookManagePage
