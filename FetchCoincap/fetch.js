const getCoinPrice = async (coin) => {
  const URL = `https://api.coincap.io/v2/assets/${coin}`;
  const response = await fetch(URL);
  const { data: { name, priceUsd, symbol } } = await response.json();
  console.log(`O preço do ${name} - ${symbol} em dólares é $${Number(priceUsd).toFixed(2)}`);
}

getCoinPrice("bitcoin");
getCoinPrice("ethereum");
getCoinPrice("litecoin");
getCoinPrice("solana");