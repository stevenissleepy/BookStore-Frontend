import { useState, useEffect } from "react"
import { Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { BookList, BookListHeader } from "../components/book_list"

import { searchBooks } from "../services/book"

function HomePage() {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    searchBooks("", []).then(setBooks)
  }, [])

  useEffect(() => {
    searchBooks(query, selectedCategories).then(setBooks)
  }, [query, selectedCategories])

  return (
    <UserLayout>
      <Row>
        {/* search form */}
        <Col span={24}>
          <BookListHeader
            quantity={books.length}
            setQuery={setQuery}
            setSelectedCategories={setSelectedCategories}
          />
        </Col>

        {/* book list */}
        <Col span={24}>
          <BookList books={books} />
        </Col>
      </Row>
    </UserLayout>
  )
}

export default HomePage
