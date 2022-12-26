import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) =>{
        return response.json()
      })
      .then((json) =>{
        setData(json)
      })
  }, [])



  const handleDelete = (id) =>{
    setData([
      ...data.filter(item => item.id !== id)
    ])
  }
  
  
  return (
    <ul className="list-group w-50 m-auto">
      {data.map(item =>{
        return(
          <li className="list-group-item d-flex justify-content-between" key={item.id}>
              <div>
                  <input type="checkbox" checked={item.completed} />
              </div>
              {item.title}

              <button onClick={() => handleDelete(item.id)}>
                X
              </button>

          </li>
        )
      })}
    </ul>
  );
}

export default App;
