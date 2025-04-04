import { Layout, Row, Col, Menu, Dropdown, Button } from "antd"
import { Link } from "react-router-dom"
import { UserOutlined, FormOutlined } from "@ant-design/icons"
import { AccountBookOutlined, LogoutOutlined } from "@ant-design/icons"

const { Header } = Layout

function MyHeader() {
  const navItems = [
    { label: "HOME", value: "/" },
    { label: "PROFILE", value: "/profile" },
    { label: "CART", value: "/cart" },
    { label: "ORDER", value: "/order" },
  ]

  const dropMenuItems = [
    {
      key: "nickname",
      label: "小明",
      icon: <UserOutlined />,
    },
    {
      key: "password",
      label: "修改密码",
      icon: <FormOutlined />,
    },
    {
      key: "balance",
      label: `余额100 元`,
      icon: <AccountBookOutlined />,
    },
    {
      key: "/logout",
      label: "登出",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ]

  return (
    <Header className="header">
      <Row className="navbar" justify="space-between">
        {/* Logo */}
        <Col flex="120px">
          <Link to="/">
            <img className="logo" src="/logo-dark.svg" alt="Logo" />
          </Link>
        </Col>

        {/* Menu */}
        <Col className="menu-container" flex="auto">
          <Menu className="menu" mode="horizontal" items={navItems} />
        </Col>

        {/* Login buttons */}
        <Col flex="120px">
          <Dropdown menu={{ items: dropMenuItems }}>
            <Button shape="circle" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default MyHeader
