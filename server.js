// server.js
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
