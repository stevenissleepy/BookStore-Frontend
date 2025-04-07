const books = [
  {
    id: "1",
    title: "也许你该找个人聊聊",
    author: "洛莉·戈特利布",
    price: 68.00,
    description: "这是一位心理治疗师的回忆录，讲述了发生在诊室中的故事。在这个小小的密闭空间里，人们会展现出最真实、最脆弱的一面；也是在这里，人们获得了陪伴和倾听，也获得了宝贵的觉察、成长与改变。",
    cover: "/books/1.png",
    category: "心理学",
    language: "中文",
    ISBN: "9787553522838"
  },
  {
    id: "2",
    title: "蛤蟆先生去看心理医生",
    author: "罗伯特·戴博德",
    price: 38.00,
    description: "蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢，他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨询师苍鹭的带领下，勇敢地探索了自己的内心世界，也逐渐找回了信心与希望……",
    cover: "/books/2.png",
    category: "心理学",
    language: "中文",
    ISBN: "9787201161693"
  },
  {
    id: "3",
    title: "都柏林人",
    author: "詹姆斯·乔伊斯",
    price: 26.00,
    description: "20世纪最重要的短篇小说集，描绘爱尔兰首都的生活图景",
    cover: "/books/3.png",
    category: "小说",
    language: "中文",
    ISBN: "9787544766509"
  },
  {
    id: "4",
    title: "瓦尔登湖",
    author: "亨利·戴维·梭罗",
    price: 28.00,
    description: "一个人若是活得诚恳，那他一定是活在遥远的地方了。 我们天性中最优美的品格，像果实上的霜粉一样，是只能轻手轻脚，才得以保存的。",
    cover: "/books/4.jpg",
    category: "散文",
    language: "中文",
    ISBN: "9787544771664"
  },
  {
    id: "5",
    title: "查令十字街84号",
    author: "海莲·汉芙",
    price: 35.00,
    description: "1949年的纽约，曼哈顿一间没有暖气的公寓里，三十三岁的穷作家海莲，偶然看到一则伦敦旧书店的广告，凭着一股莽撞劲，她开始给这个伦敦地址写信。这一写，就写了二十年。很多年后，她和这家书店的通信集，被称为“爱书人的圣经”，不断演绎。而那家书店的地址——查令十字街84号，已经成为全球爱书人之间的一个暗号。",
    cover: "/books/5.jpg",
    category: "小说",
    language: "中文",
    ISBN: "9787506394474"
  },
  {
    id: "6",
    title: "月亮与六便士",
    author: "威廉·萨默塞特·毛姆",
    price: 39.80,
    description: "“满地都是六便士，他却抬头看见了月亮。”",
    cover: "/books/6.jpg",
    category: "小说",
    language: "中文",
    ISBN: "9787544291587"
  },
  {
    id: "7",
    title: "荒原狼",
    author: "赫尔曼·黑塞",
    price: 42.00,
    description: "剖析现代人精神困境的存在主义小说经典",
    cover: "/books/7.jpg",
    category: "小说",
    language: "中文",
    ISBN: "9787532781487"
  }
];

const users = [
  {
    name: "1",
    nickname: "John Doe",
    balance: 100.0,
    avatar: "/profile-img.png",
    addresses: [
      {
        id: 1,
        receiver: "Jane Doe",
        tel: "1234567890",
        address: "123 Main St, Springfield, USA",
      },
      {
        id: 2,
        receiver: "John Smith",
        tel: "0987654321",
        address: "456 Elm St, Springfield, USA",
      },
    ],
    cart: [ 
      {
        id: "1",
        quantity: 1,
      },
      {
        id: "2",
        quantity: 1,
      },
      {
        id: "3",
        quantity: 1,
      },
    ],
    orders: [
      {
        receiver: "Jane Doe",
        tel: "1234567890",
        address: "123 Main St, Springfield, USA",
        date: "2023-10-01",
        totalPrice: 18.99,
        books: [
          {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 18.99,
            description: "A novel about the serious issues of rape and racial inequality.",
            cover: "/book-cover.jpg",
            category: "Fiction",
          },
        ],
      },
    ],
  },
]

export { books, users }
