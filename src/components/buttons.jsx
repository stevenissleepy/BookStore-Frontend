import { Button } from "antd"
import { EditOutlined } from "@ant-design/icons"

function EditButton({ onClick }) {
  return (
    <Button
      shape="circle"
      icon={<EditOutlined />}
      size="small"
      style={{
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
    />
  )
}

export { EditButton }
