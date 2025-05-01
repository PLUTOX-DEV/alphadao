import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/collections', async (req, res) => {
  try {
    const response = await axios.get('https://api.howrare.is/v0.1/collections');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching collections:', error.message);
    res.status(500).json({ error: 'Failed to fetch collections' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
