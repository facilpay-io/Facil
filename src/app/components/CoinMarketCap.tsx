import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinMarketCap: React.FC = () => {
  const [totalMarketCap, setTotalMarketCap] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('coinMarketCapData');
      const cachedTimestamp = localStorage.getItem('coinMarketCapTimestamp');

      if (cachedData && cachedTimestamp) {
        const parsedData = JSON.parse(cachedData);
        const timestamp = parseInt(cachedTimestamp, 10);

        // Check if cached data is not older than 5 minutes
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          setTotalMarketCap(parsedData.quote.USD.total_market_cap);
          console.log('Using cached data');
          return;
        }
      }

      try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
          },
        });

        const json = response.data;
        const totalMarketCapUSD = json.data.quote.USD.total_market_cap;

        // Cache the data and timestamp
        localStorage.setItem('coinMarketCapData', JSON.stringify(json.data));
        localStorage.setItem('coinMarketCapTimestamp', Date.now().toString());

        setTotalMarketCap(totalMarketCapUSD);
      } catch (ex) {
        console.error('Error fetching data:', ex);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div>
      {totalMarketCap !== null ? (
        <div>{abbreviateNumber(totalMarketCap)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

// Function to abbreviate large numbers
function abbreviateNumber(value: number) {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const suffixNum = Math.floor(('' + value).length / 3);
  let shortValue: string | number = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
}

export default CoinMarketCap;

