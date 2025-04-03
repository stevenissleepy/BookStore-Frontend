import { Breadcrumb, Layout, theme } from "antd"

import MyHeader from "./header";
import MyFooter from "./footer";

const { Content } = Layout


function MyLayout(children) {

  return (
    <Layout className="my-layout">
      {/* Header */}
      <MyHeader />
      
      {/* Content */}
      <Content className="content-container">
        {children}
      </Content>

      {/* Footer */}
      <MyFooter />
    </Layout>
  )
}

export { MyLayout }
