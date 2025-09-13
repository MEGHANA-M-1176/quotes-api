const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
   { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
   { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
   { text: "Push yourself, because no one else is going to do it for you.", author: "Meghana" },
   { text: "Great things never come from comfort zones.", author: "Anonymous" }
];

// Home route
app.get('/', (req, res) => {
   res.send('Quotes API is running! Use /quote to get a random quote.');
});

// Random quote
app.get('/quote', (req, res) => {
   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   res.json({ quote: randomQuote });
});

// All quotes
app.get('/quotes', (req, res) => {
   res.json({ quotes });
});

// Start server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
