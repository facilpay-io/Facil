import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinMarketCap: React.FC = () => {
  const [totalMarketCap, setTotalMarketCap] = useState<number | null>(null);
  const [totalMarketCapYesterday, setTotalMarketCapYesterday] = useState<number | null>(null);
  const [percentageChange, setPercentageChange] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/Danny-Nunez/CoinMarketCap-Api/main/coinmarket.json');

        const json = response.data;
        const totalMarketCapUSD = json.data.quote.USD.total_market_cap;
        const totalMarketCapYesterdayUSD = json.data.quote.USD.total_market_cap_yesterday;

        setTotalMarketCap(totalMarketCapUSD);
        setTotalMarketCapYesterday(totalMarketCapYesterdayUSD);

        // Calculate percentage change
        if (totalMarketCapYesterdayUSD) {
          const difference = totalMarketCapUSD - totalMarketCapYesterdayUSD;
          const percentage = (difference / totalMarketCapYesterdayUSD) * 100;
          setPercentageChange(percentage);
          console.log('Percentage Change:', percentage);
        }

        console.log('New data fetched:', totalMarketCapUSD);
        console.log('MC Yesterday fetched:', totalMarketCapYesterdayUSD);
        console.log(response.data);
      } catch (ex) {
        console.error('Error fetching data:', ex);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {totalMarketCap !== null && totalMarketCapYesterday !== null ? (
        <div className="flex inline-flex">
          <div>${abbreviateNumber(totalMarketCap)}</div>
          <div className="pl-2 text-xs">
            <span style={{ color: percentageChange !== null ? (percentageChange >= 0 ? 'green' : 'red') : 'black' }}>
              {percentageChange !== null ? (
                <>
                  {percentageChange >= 0 ? '↑' : '↓'}
                  {Math.abs(percentageChange).toFixed(2)}% 24h
                </>
              ) : 'N/A'}
            </span>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

// Function to abbreviate large numbers
function abbreviateNumber(value: number) {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const num = Math.abs(value);
  const suffixNum = Math.floor(Math.log10(num) / 3);
  const shortValue = parseFloat((num / Math.pow(10, suffixNum * 3)).toPrecision(2));
  const suffix = suffixes[suffixNum];
  const completeName = suffix === '' ? '' : suffix === 'K' ? 'Thousand' : suffix === 'M' ? 'Million' : suffix === 'B' ? 'Billion' : 'Trillion';
  return (value < 0 ? '-' : '') + shortValue + ' ' + completeName;
}

export default CoinMarketCap;
