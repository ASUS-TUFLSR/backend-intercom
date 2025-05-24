const express = require('express');
const cors = require('cors');
require('dotenv').config();
const geminiRouter = require('./routes/gemini');



const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/gemini', geminiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Backend running on port ${PORT}`);
});
