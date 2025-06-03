import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Layout, message } from "antd"

import { UserHeader, AdminHeader } from "./header"
import MyFooter from "./footer"
import { UserContext } from "../utils/context"
import { getUser } from "../services/user"

function BaseLayout({ children, MyHeader }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  // 检查 Login, 且保证只检查一次
  let isChecking = false
  async function checkLogin() {
    if (isChecking) return
    isChecking = true

    const me = await getUser()
    if (!me) {
      messageApi.error("请先登录", 1).then(() => navigate("/login"))
    } else {
      setUser(me)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Layout className="my-layout">
      {contextHolder}
      <MyHeader user={user} />
      <Layout.Content className="content-container">
        <UserContext.Provider value={{ user, setUser }}>{user && children}</UserContext.Provider>
      </Layout.Content>
      <MyFooter />
    </Layout>
  )
}

function UserLayout({ children }) {
  return <BaseLayout MyHeader={UserHeader}>{children}</BaseLayout>
}

function AdminLayout({ children }) {
  return <BaseLayout MyHeader={AdminHeader}>{children}</BaseLayout>
}

export { UserLayout, AdminLayout }
