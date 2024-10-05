export default function handler(req, res) {
    res.status(200).json([
        {
            "name": "Capuccino",
            "price": 12.99,
            "image": "https://i.postimg.cc/T3SCRNs9/capuccino.png"
        },
        {
            "name": "Expresso",
            "price": 12.99,
            "image": "https://i.postimg.cc/KzhfTkx3/express.png"
        }
    ])
  }