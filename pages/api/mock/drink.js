export default function handler(req, res) {
    res.status(200).json([
      {
        "name": "Refrigerante",
        "price": 12.99,
        "image": "https://i.postimg.cc/T3SCRNs9/capuccino.png"
      },
      {
          "name": "Chá",
          "price": 12.99,
          "image": "https://i.postimg.cc/Dfg6WwDm/tea.png"
      }
    ])
  }