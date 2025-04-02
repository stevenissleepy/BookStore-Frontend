import { Breadcrumb, Layout, theme } from "antd"

import MyHeader from "./header";
import MyFooter from "./footer";

const { Content } = Layout


function MyLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      {/* Header */}
      <MyHeader />
      
      {/* Content */}
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>

      {/* Footer */}
      <MyFooter />
    </Layout>
  )
}

export { MyLayout }
