import { useState, useEffect } from "react"
import { Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import BookList from "../components/book_list"
import { SearchBox } from "../components/search_box"

import { searchBooks } from "../service/book"

function HomePage() {
  const [books, setBooks] = useState([])

  // 初始加载所有 books
  useEffect(() => {
    async function fetchBooks() {
      const results = await searchBooks("")
      setBooks(results)
    }
    fetchBooks()
  }
  , [])

  const handleSearch = async (query) => {
    const results = await searchBooks(query)
    setBooks(results)
  }

  return (
    <MyLayout>
      <Row>
        {/* search form */}
        <Col span={24}>
          <SearchBox handleSearch={handleSearch}/>
        </Col>

        {/* book list */}
        <Col span={24}>
          <BookList books={books} />
        </Col>
      </Row>
    </MyLayout>
  )
}

export default HomePage
