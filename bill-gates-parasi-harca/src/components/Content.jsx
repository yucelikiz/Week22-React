import data from "../data";
import { useContext } from "react";
import { AppContext } from "../App";

const Content = () => {
  const { money, setMoney } = useContext(AppContext);

  return (
    <div className="content">
      {data.map((item) => {
        function buy() {
          item.count += 1;
          setMoney(money - item.price);
        }

        function sell() {
          if (item.count > 0) {
            item.count -= 1;
            setMoney(money + item.price);
          }
        }

        return (
          <div key={item.title} className="item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div className="buttons">
              <button className="button sell-button" onClick={sell}>
                Sell
              </button>
              <input type="text" className="count" value={item.count} />
              <button className="buy button" onClick={buy}>
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;