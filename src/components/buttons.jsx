import { PlusOutlined } from "@ant-design/icons"

function UploadButton() {
  return (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div>上传</div>
    </button>
  )
}

export { UploadButton }