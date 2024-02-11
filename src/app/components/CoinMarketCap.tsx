// CoinMarketCap.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinMarketCap: React.FC = () => {
  const [totalMarketCap, setTotalMarketCap] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/coinmarketcap');
        const totalMarketCapUSD = response.data.data.quote.USD.total_market_cap;
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
