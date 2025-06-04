import { useState } from "react"
import ImgCrop from "antd-img-crop"
import { Space, Badge, Avatar, Button, Card, Upload } from "antd"
import { EditOutlined } from "@ant-design/icons"

import { UploadButton } from "./buttons"

import { updateUser } from "../services/user"
import { convertToBase64 } from "../utils/image"

function ProfileAvatar({ user }) {
  const [editAvatar, setEditAvatar] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  function handleEditAvatar() {
    setEditAvatar(true)
  }

  // check whether upload a valid image
  async function handleImageUpload(file) {
    setIsUploading(true)
    const base64 = await convertToBase64(file)
    await updateUser({ avatar: base64 })
    setIsUploading(false)
    return false
  }

  function handleChange() {
    window.location.reload()
    setEditAvatar(false)
  }

  return (
    <Card variant="borderless">
      <Space className="avatar-wrapper" direction="vertical" size={2}>
        {/* avatar */}
        {!editAvatar && (
          <div style={{ textAlign: "center" }}>
            <Badge
              count={
                <Button
                  shape="circle"
                  icon={<EditOutlined />}
                  size="small"
                  onClick={handleEditAvatar}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                />
              }
              offset={[-5, 85]}
            >
              <Avatar src={user.avatar} style={{ width: "100px", height: "100px" }} />
            </Badge>
          </div>
        )}
        {/* edit avatar */}
        {editAvatar && (
          <ImgCrop showGrid showReset rotationSlider modalOk="确定" modalCancel="取消">
            <Upload
              name="file"
              accept="image/*"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={handleImageUpload}
              onChange={handleChange}
              disabled={isUploading}
              withCredentials={true}
            >
              <UploadButton />
            </Upload>
          </ImgCrop>
        )}

        {/* nickname */}
        <span style={{ fontSize: 20 }}>{user.username}</span>
      </Space>
    </Card>
  )
}

export default ProfileAvatar
