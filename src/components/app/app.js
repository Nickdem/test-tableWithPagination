import { useEffect, useState } from 'react';
import Filter from '../filter/filter';
import json from '../../data.json';
import Table from '../table/table';

function App() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState(null)
  const tableLenght = 50
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    setData(json)
  }, [])

  function reverser() {
    setReverse(!reverse)
    setData(data.reverse())
  }

  function pagination(num1, num2) {
    let arr = []
    let pages = num1 / num2
    for (let i = 0; i < pages; i++) {
      arr.push(i)
    }
    return (
      <ul className="app__pagination center">
        {counter > 0 && <li className="app__pagination-arrow" onClick={() => setCounter(counter - tableLenght)}>&larr;</li>}
        {arr.map(num => {
          if (num > (counter / num2 - 3) && num < (counter / num2 + 3)) {
            return (
              <li className={num === counter/num2 || 0 ? 'app__pagination-item--active' : 'app__pagination-item'} onClick={() => setCounter(num * tableLenght)} key={num}>{num + 1}</li>
            )
          }
        })}
        {counter < num1 - num2 && <li className="app__pagination-arrow" onClick={() => setCounter(counter + tableLenght)}>&rarr;</li>}
      </ul>)
  }

  function curData() {
    return data.slice(counter, counter + tableLenght)
  }

  function changeHandler(e) {
    const frr = json.filter(item => {
      return Object.values(item).join(' , ').toUpperCase().includes(e.target.value.toUpperCase())
    })

    setData(frr)
    setCounter(0)
  }

  if (!data) return <p>жди!</p>

  return (
    <main className="app container">
      <Filter change={changeHandler} />
      <Table data={curData()} func={reverser} />
      {pagination(data.length, tableLenght)}
    </main>
  );
}

export default App;
