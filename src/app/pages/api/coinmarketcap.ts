import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY as string,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
