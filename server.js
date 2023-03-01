const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define the authentication endpoint
app.post('/auth', (req, res) => {
  // Get the username and password from the request body
  const { username, password } = req.body;

  // Check if the credentials are correct
  if (username === 'bmc' && password === 'borame1234') {
    // Authentication succeeded
    res.json({ success: true });
  } else {
    // Authentication failed
    res.json({ success: false });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
