import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className="notFound_content">
        <h2>Não a nada aqui :(</h2>
        <Link to="/"><p>Início</p></Link>
      </div>
    </div>
  )
}

export default NotFound