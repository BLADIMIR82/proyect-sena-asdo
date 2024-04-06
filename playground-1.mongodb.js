// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('api');

// Create a new document in the collection.
db.getCollection('products').insertOne({

"name": "Hasts",
"description": "Best hats",
"brand": "Nike",
"category": "Women",
"colors": "Black",
"images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfFoGHvqijwzaeAqgVclKVYbjF5wrci0FBU_BMHpXqw&s",
"price": 500,
"sizes": "XL",
"totalQt": 20,
"totalSold": 5
});
