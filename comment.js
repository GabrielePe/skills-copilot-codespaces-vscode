// Create web server
const express = require('express');
const app = express();

// Create a comment
app.post('/comment', function (req, res) {
    res.send('POST request to the homepage');
});

// Read a comment
app.get('/comment', function (req, res) {
    res.send('GET request to the homepage');
});

// Update a comment
app.put('/comment', function (req, res) {
    res.send('PUT request to the homepage');
});

// Delete a comment
app.delete('/comment', function (req, res) {
    res.send('DELETE request to the homepage');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// Run the web server
// node comment.js
// Open browser and go to http://localhost:3000/comment