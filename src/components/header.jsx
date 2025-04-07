import { Layout, Row, Col, Menu, Dropdown, Button } from "antd"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { UserOutlined, FormOutlined } from "@ant-design/icons"
import { AccountBookOutlined, LogoutOutlined } from "@ant-design/icons"

import { users } from "../data"

function MyHeader() {
  const navigate = useNavigate()
  const parts = useLocation().pathname.split("/")
  const selectedKey = "/" + parts[parts.length - 1]
  const navItems = [
    { label: "HOME", key: "/" },
    { label: "PROFILE", key: "/profile" },
    { label: "CART", key: "/cart" },
    { label: "ORDER", key: "/order" },
  ]

  const dropMenuItems = [
    {
      key: "nickname",
      label: users[0].nickname,
      icon: <UserOutlined />,
    },
    {
      key: "password",
      label: "修改密码",
      icon: <FormOutlined />,
    },
    {
      key: "balance",
      label: `余额 ${users[0].balance} 元`,
      icon: <AccountBookOutlined />,
    },
    {
      key: "/logout",
      label: "登出",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ]

  const handleMenuClick = (e) => {
    navigate(e.key)
  }

  return (
    <Layout.Header className="header">
      <Row className="navbar" justify="space-between">
        {/* Logo */}
        <Col flex="120px">
          <Link to="/">
            <img className="logo" src="/logo-dark.svg" alt="Logo" />
          </Link>
        </Col>

        {/* Menu */}
        <Col className="menu-container" flex="auto">
          <Menu
            className="menu"
            mode="horizontal"
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            items={navItems}
            onClick={handleMenuClick}
          />
        </Col>

        {/* Login buttons */}
        <Col flex="120px">
          <Dropdown menu={{ items: dropMenuItems }}>
            <Button shape="circle" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default MyHeader
