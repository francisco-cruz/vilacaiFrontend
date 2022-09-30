import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import HeaderAdmin from "../../../components/headerAdmin/headerAdmin"
import api from "../../../services/api"

function AdminProduto (){
  const [allProdutos, setAllProdutos] = useState([])

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get('/produtos')
      setAllProdutos(response.data)
    }

    getAllProdutos()
  }, [])


  return(
    <div>
      < HeaderAdmin />
      <h1>Página produtos</h1>
      <Link to={"/createProduto"}><button className="btn-adicionar">Adiconar</button></Link>
      <table>
      {allProdutos.map(produto => (
        <tr>
          <td><Link to={""}>{produto.name}</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
      ))}
    
      </table>
    </div>
  )
}


export default AdminProduto