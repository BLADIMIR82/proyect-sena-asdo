// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('api');

// Create a new document in the collection.
db.getCollection('products').insertOne({
    "name": "Boots",
    "description": "Best hats",
    "brand": "converse",
    "category": "man",
    "colors": "White",
    "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvonoxFm3mmqXWEzBMo_VWOaOmwsHgztTXxmdweOoJBg&s",
    "price": 100,
    "sizes": "L",
    "totalQt": 200,
    "totalSold": 5
});
