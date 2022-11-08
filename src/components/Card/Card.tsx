import { Character } from "../../types"
import './style.scss'

interface Props{
  characters: Character[]
}

const Cart = (props:Props) => {
  return (
    <div className="container-cards">
      {props.characters.map((e)=>(
        <div className="card" key={e.id}>
          <img className="card--img" src={e.image} alt="" />
          <p className="card--name">{e.name}</p>
          <p className="card--status">{e.status}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart