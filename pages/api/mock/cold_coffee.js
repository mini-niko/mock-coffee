export default function handler(req, res) {
    res.status(200).json([{
        "name": "Frapuccino",
        "price": 12.99,
        "image": "https://i.postimg.cc/DZQgPvwj/frapuccino.png"
    }])
  }