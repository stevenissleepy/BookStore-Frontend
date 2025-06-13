import { useState, useEffect } from "react"
import { List, Space, Row, Col, Select } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import InfiniteScroll from "react-infinite-scroll-component"

import { SearchBox } from "../components/search_box"
import BookCard from "./book_card"

import { getCategories } from "../services/book"

function BookList({ books, quantity, loadMoreBooks }) {
  return (
    <InfiniteScroll
      dataLength={books.length}
      next={loadMoreBooks}
      hasMore={books.length < quantity}
      loader={<h4>Loading...</h4>}
      style={{ width: "100%", overflow: "hidden" }}
    >
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
    </InfiniteScroll>
  )
}

function BookListHeader({ quantity, setQuery, setSelectedCategories }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <Row>
      <Col span={24}>
        <SearchBox onSearch={setQuery} />
      </Col>

      <Col span={24}>
        <Row justify="start" align="middle" style={{ marginBottom: "20px", marginTop: "30px" }}>
          <Col span={2}>
            <div className="book-list-header-left">{quantity} Books</div>
          </Col>
          <Col span={2} offset={16} style={{ textAlign: "right" }}>
            <h3 className="book-list-header-right">
              <div style={{ marginRight: "10px" }}>
                <MenuOutlined />
              </div>{" "}
              Filter
            </h3>
          </Col>
          <Col span={4}>
            <Select
              mode="multiple"
              size="large"
              placeholder="Please select"
              style={{ width: "100%" }}
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              onChange={setSelectedCategories}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { BookList, BookListHeader }
