const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
