import { useEffect, useState } from "react";
import Filter from "../filter";
import Table from "../table";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const [reverse, setReverse] = useState(false);
  const tableLenght = 50;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const json = await res.json();
    await setData({ comments: json, allComents: json });
  }

  function reverser() {
    const newData = data.comments.reverse();
    setReverse(!reverse);
    setData((prev) => {
      return { ...prev, comments: newData };
    });
  }

  function pagination(num1, num2) {
    let arr = [];
    let pages = num1 / num2;
    for (let i = 0; i < pages; i++) {
      arr.push(i);
    }
    return (
      <ul className="app__pagination center">
        {counter > 0 && (
          <li
            className="app__pagination-arrow"
            onClick={() => setCounter(counter - tableLenght)}
          >
            &larr;
          </li>
        )}
        {arr.map((num) => {
          if (num > counter / num2 - 3 && num < counter / num2 + 3) {
            return (
              <li
                className={
                  num === counter / num2 || 0
                    ? "app__pagination-item--active"
                    : "app__pagination-item"
                }
                onClick={() => setCounter(num * tableLenght)}
                key={num}
              >
                {num + 1}
              </li>
            );
          }
        })}
        {counter < num1 - num2 && (
          <li
            className="app__pagination-arrow"
            onClick={() => setCounter(counter + tableLenght)}
          >
            &rarr;
          </li>
        )}
      </ul>
    );
  }

  function curData() {
    return data.comments.slice(counter, counter + tableLenght);
  }

  function changeHandler(e) {
    const newData = data.allComents.filter((item) => {
      return Object.values(item)
        .join(" , ")
        .toUpperCase()
        .includes(e.target.value.toUpperCase());
    });

    setData((prev) => {
      return { ...prev, comments: newData };
    });
    setCounter(0);
  }

  if (!data) return <p>жди!</p>;

  return (
    <main className="app container">
      <Filter change={changeHandler} />
      <Table data={curData()} func={reverser} />
      {pagination(data.comments.length, tableLenght)}
    </main>
  );
}

export default App;