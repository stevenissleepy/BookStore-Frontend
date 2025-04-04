import { List, Space } from "antd"
import BookCard from "./book_card"

function BookList({ books }) {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
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
      {/* pagination */}
      
    </Space>
  )
}

export default BookList
