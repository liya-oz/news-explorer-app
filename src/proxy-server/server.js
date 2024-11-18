import express from 'express';
import axios from 'axios';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const { PORT = 5000, API_BASE_URL, API_KEY } = process.env;
if (!API_KEY) throw new Error('API_KEY is not found');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Server is working'));

app.get('/proxy/:endpoint', async (req, res) => {
  try {
    const { endpoint } = req.params;
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      params: { ...req.query, 'api-key': API_KEY },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data || 'Unknown error',
    });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
