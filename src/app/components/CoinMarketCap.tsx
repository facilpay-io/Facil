import React, { useEffect } from 'react';
import axios from 'axios';

const CoinMarketCap: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      let response = null;
      try {
        response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
          },
        });
        // success
        const json = response.data;
        console.log(json);
      } catch (ex) {
        // error
        console.log(ex);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []);

  return (
    <div>
     $1.5 Trillion
    </div>
  );
};

export default CoinMarketCap;
