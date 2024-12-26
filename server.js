const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});


// app.get('/landing-page', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'landing.html')); 
// });



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
