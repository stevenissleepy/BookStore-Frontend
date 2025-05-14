import { useState } from "react"
import ImgCrop from "antd-img-crop"
import { Space, Badge, Avatar, Button, Card, Upload } from "antd"
import { EditOutlined } from "@ant-design/icons"

import { UploadButton } from "./buttons"

function ProfileAvatar({ user }) {
  const [editAvatar, setEditAvatar] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  function handleEditAvatar() {
    setEditAvatar(true)
  }

  // check whether upload a valid image
  function checkUpload(file) {
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      messageApi.error("系统只支持 jpeg 或 png 格式的图片！")
      return false
    }
    if (file.size > 10 * 1024 * 1024) {
      messageApi.error("图片大小不能超过 10M")
      return false
    }
    return true
  }

  // change the avatar
  const handleChange = () => {
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
              beforeUpload={checkUpload}
              onChange={handleChange}
              withCredentials={true}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100px", height: "100px" }} />
              ) : (
                <UploadButton />
              )}
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
