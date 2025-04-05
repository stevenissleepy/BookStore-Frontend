import { Layout } from "antd"

import MyHeader from "./header"
import MyFooter from "./footer"

const { Content } = Layout

function MyLayout({ children }) {
  return (
    <Layout className="my-layout">
      <MyHeader />
      <Content className="content-container">
        {children}
      </Content>
      <MyFooter />
    </Layout>
  )
}

export { MyLayout }
