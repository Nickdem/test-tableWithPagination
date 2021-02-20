import Tbody from "./tbody";
import Thead from "./thead";

// export default function Table({ data }) {
//   const [reverse, setReverse] = useState(false)
//   console.log(reverse);
//   useEffect(() => {
//     data.reverse()
//   }, [reverse, data])

//   if (!data) return <p>жди</p>

//   function Body() {
//     return (
//       <tbody>
//         {data.map(item => (<Tbody key={item.id} item={item} />) )}
        
//       </tbody>
//   )}

//   return (
//     <table border="1">
//       <caption>Таблица комментариев</caption>
//       <Thead foo={() => { setReverse(!reverse) }} />
//       {Body()}

//     </table>
//   )
// }

export default function Table({ data, func }) {
  
  function Body() {
    return (
      <tbody>
        {data.map(item => (<Tbody key={item.id} item={item} />) )}
        
      </tbody>
  )}


  return (
    <table border="1">
      <caption>Таблица комментариев</caption>
      <Thead foo={func} />
      {Body()}

    </table>
  )
}