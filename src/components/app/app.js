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
    console.log(counter, num1);
    return (
      <div style={{ 'display': 'flex' }}>
        {counter > 0 && <p className="no-cur" onClick={() => setCounter(counter - tableLenght)}>&larr;</p>}
        {arr.map(num => {
          if (num > (counter / num2 - 3) && num < (counter / num2 + 3)) {
            return (
              <p className={num === counter/num2 || 0 ? 'cur' : 'no-cur'} onClick={() => setCounter(num * tableLenght)} key={num}>{num + 1}</p>
            )
          }
        })}
        {counter < num1 - num2 && <p className="no-cur" onClick={() => setCounter(counter + tableLenght)}>&rarr;</p>}
      </div>)
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
