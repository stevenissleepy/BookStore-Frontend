import { useState } from "react"
import { Form, Input, Button, Upload, Modal } from "antd"
import { UploadOutlined } from "@ant-design/icons"

import { convertToBase64 } from "../utils/image"
import { uploadBook, updateBook } from "../services/book"

function BookUploadModal({ open, setOpen, book = null }) {
  const [form] = Form.useForm()
  const [base64Image, setBase64Image] = useState(book?.cover || null)
  const [isUploading, setIsUploading] = useState(false)
  const initialValues = {
    ...book,
    price: book?.price ? (book.price / 100).toFixed(2) : undefined,
  }

  function handleCancel() {
    setOpen(false)
    form.resetFields()
    setBase64Image(null)
    setIsUploading(false)
  }

  // 处理图片上传
  async function handleImageUpload(file) {
    setIsUploading(true)
    const base64 = await convertToBase64(file)
    setBase64Image(base64)
    setIsUploading(false)
    return false
  }

  // 提交表单
  async function handleSubmit(values) {
    const bookData = {
      title: values.title,
      author: values.author,
      price: parseFloat(values.price) * 100,
      stock: values.stock,
      category: values.category,
      language: values.language,
      description: values.description,
      isbn: values.isbn,
      cover: base64Image,
    }

    if (book) {
      await updateBook({ ...bookData, id: book.id })
    } else {
      await uploadBook(bookData)
    }

    setOpen(false)
    window.location.reload()
    form.resetFields()
    setBase64Image(null)
  }

  return (
    <Modal title="上传图书" open={open} footer={null} width={800} onCancel={handleCancel}>
      <Form form={form} onFinish={handleSubmit} layout="vertical" initialValues={initialValues}>
        <Form.Item name="title" label="书名" rules={[{ required: true, message: "请输入书名" }]}>
          <Input />
        </Form.Item>

        <Form.Item name="author" label="作者" rules={[{ required: true, message: "请输入作者" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="单价"
          rules={[
            { required: true, message: "请输入单价" },
            { pattern: /^\d+(\.\d{1,2})?$/, message: "请输入有效的价格" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="stock" label="库存" rules={[{ required: true, message: "请输入库存" }]}>
          <Input type="number" min={0}/>
        </Form.Item>

        <Form.Item name="category" label="分类" rules={[{ required: true, message: "请输入分类" }]}>
          <Input />
        </Form.Item>

        <Form.Item name="language" label="语言" rules={[{ required: true, message: "请输入语言" }]}>
          <Input />
        </Form.Item>

        <Form.Item name="isbn" label="ISBN" rules={[{ required: true, message: "请输入ISBN" }]}>
          <Input />
        </Form.Item>

        <Form.Item name="description" label="书籍描述" rules={[{ required: true, message: "请输入描述" }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="封面图片"
          extra={base64Image && <img src={base64Image} alt="封面预览" style={{ maxWidth: 200, marginTop: 10 }} />}
        >
          <Upload
            accept="image/jpeg,image/png"
            beforeUpload={handleImageUpload}
            showUploadList={false}
            disabled={isUploading}
          >
            <Button icon={<UploadOutlined />} loading={isUploading}>
              上传封面图片
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!base64Image}>
            提交书籍信息
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default BookUploadModal
