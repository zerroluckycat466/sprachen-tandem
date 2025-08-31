const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sprachen-tandem', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error('MongoDB-Verbindungsfehler:', err));

app.get('/', (req, res) => {
  res.send('Willkommen bei Sprachen Tandem!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});