const getPrice = async () => {
  const URL = 'https://api.coincap.io/v2/assets/bitcoin';
  const response = await fetch(URL);
  const { data: { priceUsd, symbol } } = await response.json();
  console.log(`O preço do Bitcoin - ${symbol} em dólares é $${Number(priceUsd).toFixed(2)}`);
}

getPrice();