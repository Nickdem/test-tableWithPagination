import { useEffect, useState } from 'react';
import json from './data.json';
import Table from './table';

// function App() {
//   const [counter, setCounter] = useState(0)
//   const [curData, setCurData] = useState(null)
//   const tableLenght = 50
//   const pages = json.length / tableLenght

//   useEffect(() => {
//     setCurData(json.slice(counter, counter + tableLenght))
//   }, [counter])

//   function pagination() {
//     let arr = []
//     for (let i = 0; i < pages; i++) {
//       arr.push(i)
//     }

//     return arr.map(num => {
//       return (
//         <p onClick={() => setCounter(num * tableLenght)} key={num}>{num + 1}</p>
//       )
//     })
//   }

//   if (!curData) return <p>жди!</p>
  
//   return (
//     <>
//       <div className="app-filter">
//         <label htmlFor="filter">Фильтр:</label>
//         <input className="app-filter__input" id="filter" />
//       </div>
//       <Table data={curData} />
//       <div style={{'display': 'flex'}}>{pagination()}</div>
//     </>
//   );
// }

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
    return arr.map(num => {
      return (
        <p onClick={() => setCounter(num * tableLenght)} key={num}>{num + 1}</p>
      )
    })
  }

  function curData() {
    return data.slice(counter, counter + tableLenght)
  }

  function changeHandler(e) {
    
    const frr = json.filter(item => {
      return Object.values(item).join(' , ').includes(e.target.value)
    })

    setData(frr)
    setCounter(0)
  }

  if (!data) return <p>жди!</p>
  
  return (
    <main className="app container">
      <div className="app-filter">
        <label htmlFor="filter">Фильтр:</label>
        <input className="app-filter__input" onChange={changeHandler}  id="filter" />
      </div>
      <Table data={curData()} func={reverser} />
      <div style={{'display': 'flex'}}>{pagination(data.length, tableLenght)}</div>
    </main>
  );
}

export default App;
