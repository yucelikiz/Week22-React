import data from "../data";
import { useState, useEffect } from "react";

const TransactionList = () => {
  const [time, setTime] = useState(new Date());
  let total = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transaction-container">
      <h2>Your Transactions</h2>
      <ul>
        {data.map((item) => {
          if (item.count > 0) {
            total += item.price * item.count;
            return (
              <li>
                {item.title} <span>x{item.count}</span>{" "}
                <span className="dolar">${item.price * item.count}</span>
              </li>
            );
          }
        })}
      </ul>
      <div className="line"></div>
      <p>TOTAL: <span>${total}</span></p>
    </div>
  );
};

export default TransactionList;
