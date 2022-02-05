import { useEffect, useState } from "react";
import styles from "./App.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setCoin] = useState();
  const [dollar, setDollar] = useState(1);
  const onSelect = (event) => {
    setCoin(event.target.value);
  };
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setCoin(json[0].quotes.USD.price);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h1>The Coins💸</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select
          className={styles.select}
          onChange={onSelect}
          value={selectCoin}
        >
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <div className={styles.input}>
          $<input value={dollar} onChange={onChange} type="number" />
          ↔
          <input value={dollar / selectCoin} type="number" disabled="true" />
        </div>
      )}
    </div>
  );
}

export default App;
