import React, { useState, useEffect } from "react"
import { List, Space, Row, Col, Select } from "antd"
import { MenuOutlined } from "@ant-design/icons"

import BookCard from "./book_card"

import { getBookCategories } from "../services/book"

function BookList({ books }) {
  const [categories, setCategories] = useState([])
  const [filteredBooks, setFilteredBooks] = useState(books)

  useEffect(() => {
    async function fetchCategories() {
      const results = await getBookCategories()
      setCategories(results)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])

  const handleCategoryChange = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setFilteredBooks(books)
    } else {
      const filtered = books.filter((book) => selectedCategories.includes(book.category))
      setFilteredBooks(filtered)
    }
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row justify="start" align="middle" style={{ marginBottom: "20px", marginTop: "30px" }}>
        <Col span={2}>
          <div className="book-list-header-left">{filteredBooks.length} Books</div>
        </Col>
        <Col span={2} offset={16} style={{ textAlign: "right" }}>
          <h3 className="book-list-header-right">
            <div style={{marginRight: "10px"}}><MenuOutlined /></div> Filter
          </h3>
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
            onChange={handleCategoryChange}
          />
        </Col>
      </Row>

      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredBooks.map((book) => ({
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
