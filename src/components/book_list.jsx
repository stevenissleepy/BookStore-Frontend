import React, { useState, useEffect } from "react"
import { List, Space, Row, Col, Select } from "antd"

import BookCard from "./book_card"

import { getBookCategories, getBooksByCategory } from "../service/book"

function BookList({ books }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      const results = await getBookCategories()
      setCategories(results)
    }
    fetchCategories()
  }, [])

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {/* book list header */}
      <Row justify="space-between" align="middle" style={{ marginBottom: "20px", marginTop: "30px" }}>
        <Col>
          <div className="book-list-header-left">{books.length} Books</div>
        </Col>
        <Col span={4}>
          <Select
            mode="multiple"
            size="large"
            placeholder="Please select"
            style={{ width: "100%" }}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
          />
        </Col>
      </Row>

      {/* book list */}
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={books.map((book) => ({
          ...book,
          key: book.id,
        }))}
        renderItem={(book) => (
          <List.Item>
            <BookCard book={book} />
          </List.Item>
        )}
      />
    </Space>
  )
}

export default BookList
