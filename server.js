const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sprachen-tandem';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Willkommen bei Sprachen Tandem!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});