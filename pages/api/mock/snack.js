export default function handler(req, res) {
    res.status(200).json([
        {
            "name": "Pretzel",
            "price": 12.99,
            "image": "https://i.postimg.cc/7hxNBFCx/pretzels.png"
        },        
        {
            "name": "Sanduíche",
            "price": 12.99,
            "image": "https://i.postimg.cc/HnB9F65b/sandwich.png"
        } 
    ])
  }