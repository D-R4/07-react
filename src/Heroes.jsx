import { useState } from "react"

function Heroes(){

    const [names,setNames] = useState([
        'Шерлок Холмс',
        'Доктор Ватсон',
        'Ваха Исаев',
        'Лечи Шабазов'
    ])

    const handleDelete = (idx) =>{
        setNames(
            [
                ...names.filter((item, index) => index !== idx)
            ]
        )
    }

   return(
        <ul>
            {names.map((item, index) =>{
                return(
                    <li 
                    onClick={() => handleDelete(index)}
                    key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
   )
}
export default Heroes