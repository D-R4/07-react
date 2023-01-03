import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



function App() {

  const [data, setData] = useState([])

  const arr = data.filter(item => item.completed === true)
  const arr2 = data.filter(item => item.completed === false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) =>{
        return response.json()
      })
      .then((json) =>{
        setData(json)
      })
  }, [])

  const completed = (id) => {
    setData(data.map(item => item.id === id ? {...item, completed: !item.completed} : {...item}))
  }


  const handleDelete = (id) =>{
    setData([
      ...data.filter(item => item.id !== id)
    ])
  }
  
  
  return (
    <div>
      <h1>Всего задач : {data.length}</h1>
      <h2>Выполнено : {arr.length}</h2>
      <h2>Не выполнено : {arr2.length}</h2>

      <ul className="list-group w-50 m-auto">
      {data.map(item =>{
        return(
          <li className="list-group-item d-flex justify-content-between" key={item.id}>
              <div>
                  <input type="checkbox" checked={item.completed} onChange={() => completed(item.id)} />
              </div>
              {item.title}

              <button onClick={() => handleDelete(item.id)}>
                X
              </button>

          </li>
        )
      })}
    </ul>
    </div>

    
  );
}

export default App;
