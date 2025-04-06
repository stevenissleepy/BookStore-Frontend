import { Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import BookList from "../components/book_list"
import { SearchBox } from "../components/search_box"

import { books } from "../data"

function HomePage() {
  return (
    <MyLayout>
      <Row gutter={[0, 50]}>
        {/* search form */}
        <Col span={24}>
          <SearchBox />
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
