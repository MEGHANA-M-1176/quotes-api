const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Home route (add this)
app.get('/', (req, res) => {
   res.send('Quotes API is running! Use /quote to get a random quote.');
});

// Existing quote route
app.get('/quote', (req, res) => {
   const quotes = [
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Your limitation—it’s only your imagination."
   ];
   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   res.json({ quote: randomQuote });
});

// ✅ This must stay at the end
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
