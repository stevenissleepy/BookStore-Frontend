import { useState, useEffect } from "react"
import { Row, Col } from "antd"

import { AdminLayout } from "../components/layout"
import { BookList, BookListHeader } from "../components/book_list"

import { searchBooks } from "../services/book"

function AdminHomePage() {
  const [books, setBooks] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [query, setQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadMoreBooks() {
    if (loading) return
    setLoading(true)
    const response = await searchBooks(query, selectedCategories, page, 8)
    const newBooks = response.books || []
    setBooks((books) => [...books, ...newBooks])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    searchBooks("", [], 0, 8).then(({ books, quantity }) => {
      setBooks(books)
      setQuantity(quantity)
    })
  }, [])

  useEffect(() => {
    searchBooks(query, selectedCategories, 0, 8).then(({ books, quantity }) => {
      setBooks(books)
      setQuantity(quantity)
    })
  }, [query, selectedCategories])

  return (
    <AdminLayout>
      <Row>
        {/* search form */}
        <Col span={24}>
          <BookListHeader quantity={quantity} setQuery={setQuery} setSelectedCategories={setSelectedCategories} />
        </Col>

        {/* book list */}
        <Col span={24}>
          <BookList books={books} quantity={quantity} loadMoreBooks={loadMoreBooks} />
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminHomePage
