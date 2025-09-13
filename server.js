const express = require('express');
const fetch = require('node-fetch'); //  Required if using Node <18
const app = express();
const PORT = process.env.PORT || 3000;

//  Local quotes (used as fallback if external API fails)
const quotes = [
   { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
   { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
   { text: "Push yourself, because no one else is going to do it for you.", author: "Meghana" },
   { text: "Great things never come from comfort zones.", author: "Anonymous" }
];

// Home route
app.get('/', (req, res) => {
   res.send('Quotes API is running! Use /quote for a fresh random quote or /quotes for all local quotes.');
});

//  Random quote route (fetches from external API first)
app.get('/quote', async (req, res) => {
   try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      res.set('Cache-Control', 'no-store'); //  no caching to ensure new quote each refresh
      res.json({ text: data.content, author: data.author });
   } catch (error) {
      console.error('External API failed, using fallback:', error);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      res.set('Cache-Control', 'no-store');
      res.json({ quote: randomQuote });
   }
});

//  All local quotes route
app.get('/quotes', (req, res) => {
   res.json({ quotes });
});

//  Start server
app.listen(PORT, () => {
   console.log(` Server is running on http://localhost:${PORT}`);
});
