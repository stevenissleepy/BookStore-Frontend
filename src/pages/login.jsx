import { Link } from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { LoginFormPage, ProFormText } from "@ant-design/pro-components"

function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <LoginFormPage
        backgroundImageUrl="/login-bg.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        logo={"/logo.png"}
        title="BookJar"
        subTitle="电子书城"
        style={{ height: "100vh" }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className={"prefixIcon"} />,
          }}
          placeholder={"请输入用户名"}
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <Link to="/">新账号？前往注册</Link>
          <a
            style={{
              float: "right",
            }}
            href="#/"
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}

export default LoginPage
