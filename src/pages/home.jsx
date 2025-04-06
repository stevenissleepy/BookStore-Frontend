import { useState } from "react"
import { Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import BookList from "../components/book_list"
import { SearchBox } from "../components/search_box"

import { searchBooks } from "../service/book"

function HomePage() {
  // 初始加载所有 books
  const [books, setBooks] = useState([])

  const handleSearch = async (query) => {
    const results = await searchBooks(query)
    setBooks(results)
  }

  return (
    <MyLayout>
      <Row gutter={[0, 50]}>
        {/* search form */}
        <Col span={24}>
          <SearchBox onSearch={handleSearch}/>
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
