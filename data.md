用于记录前后端通信的数据格式

## 统一数据格式

后端信息返回的统一格式如下

```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

后面的部分记录的都是 data 项的内容

## book

获取所有书籍信息 `getAllBook()`

```json
{
  "books": [
    {
      "id": 1,
      "title": "也许你该找个人聊聊",
      "author": "洛莉·戈特利布",
      "description": "这是一位心理治疗师的回忆录...",
      "category": "心理学",
      "language": "中文",
      "isbn": "9787553522838",
      "price": 68.0,
      "cover": "data:image/png;base64,..."
    },
    {
      "id": 2,
      "title": "蛤蟆先生去看心理医生",
      "author": "罗伯特·戴博德",
      "description": "蛤蟆先生一向爱笑爱闹...",
      "category": "心理学",
      "language": "中文",
      "isbn": "9787201161693",
      "price": 38.0,
      "cover": "data:image/png;base64,"
    }
  ]
}
```

## cart

获取用户的购物车 `getCart()`

```json
{
  "cart": [
    {
      "id": 1,
      "book": {
        "id": 2,
        "title": "蛤蟆先生去看心理医生",
        "author": "罗伯特·戴博德",
        "description": "蛤蟆先生一向爱笑爱闹...",
        "category": "心理学",
        "language": "中文",
        "isbn": "9787201161693",
        "price": 38.0,
        "cover": "data:image/png;base64,"
      },
      "quantity": 2
    }
  ]
}
```

## order

获取用户订单 `getOrders()`

```json
{
  "orders": [
    {
      "receiver": "Jane Doe",
      "phone": "1234567890",
      "address": "123 Main St, Springfield, USA",
      "date": "2025-05-14",
      "totalPrice": 182.0,
      "orderItems": [
        {
          "book": {
            "id": 2,
            "title": "蛤蟆先生去看心理医生",
            "author": "罗伯特·戴博德",
            "description": "蛤蟆先生...",
            "category": "心理学",
            "language": "中文",
            "isbn": "9787201161693",
            "price": 38.0,
            "cover": "data:image/png;base64,"
          },
          "quantity": 2
        }
      ]
    }
  ]
}
```

# Address

获取全部地址 `getAddresses()`

```json
{
  "addresses": [
    {
      "id": 1,
      "receiver": "Steven Yuan",
      "phone": "19888444503",
      "address": "No 800 Dongchuan Road "
    }
  ]
}
```
