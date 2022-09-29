import api from "../../services/api"
import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import HeaderAdmin from "../../components/headerAdmin/headerAdmin"

function AdminSecaoRecheio (){
  const [allSecaoRecheio, setAllSecaoRecheio] = useState([])

  useEffect(() => {
    async function getAllSecaoRecheio() {
      const response = await api.get('/SecaoRecheio')
        setAllSecaoRecheio(response.data)
    }

    getAllSecaoRecheio()
  }, [])


  return(
    <div>
       < HeaderAdmin />
      <h1>Página seçoes de Recheios</h1>
      <table>
      {allSecaoRecheio.map(secao => (
        <tr>
          <td><Link to={""}>{secao.name}</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
      ))}

      </table>
    </div>
  )
}


export default AdminSecaoRecheio