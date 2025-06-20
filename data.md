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

搜索书籍信息 `searchBooks(query, categories, page, limit)`

```json
{
  "quantity": 2,
  "books": [
    {
      "id": 1,
      "title": "也许你该找个人聊聊",
      "author": "洛莉·戈特利布",
      "description": "这是一位心理治疗师的回忆录...",
      "category": "心理学",
      "language": "中文",
      "isbn": "9787553522838",
      "price": 6800,
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
      "price": 3800,
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
      "book": {
        "id": 2,
        "title": "蛤蟆先生去看心理医生",
        "author": "罗伯特·戴博德",
        "description": "蛤蟆先生一向爱笑爱闹...",
        "category": "心理学",
        "language": "中文",
        "isbn": "9787201161693",
        "price": 3800,
        "cover": "data:image/png;base64,"
      },
      "quantity": 2
    }
  ]
}
```

## order

搜索订单 
+ `searchAllOrders(dateRange, bookTitle, page, limit)`
+ `searchUserOrders(dateRange, bookTitle, page, limit)`

```json
{
  "quantity": 2,
  "orders": [
    {
      "receiver": "Jane Doe",
      "tel": "1234567890",
      "address": "123 Main St, Springfield, USA",
      "date": "2025-05-14",
      "totalPrice": 18200,
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
            "price": 3800,
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
      "tel": "19888444503",
      "address": "No 800 Dongchuan Road "
    }
  ]
}
```
