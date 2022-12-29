import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin"
import api from "../../../services/api"

export default function SectionsProduct (){

  const [allSecoes, setAllSecoes] = useState([])

  useEffect(() => {
    async function getAllSecoes() {
      const response = await api.get('/secaoProduto')
      setAllSecoes(response.data)
    }

    getAllSecoes()
  }, [])


  return(
    <div>
       < HeaderAdmin />
      <h1>Página secçoes de produtos</h1>
      <table>
      {allSecoes.map(secao => (
        <tr>
          <td><Link to={""}>{secao.name}</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
      ))}
       
      </table>

    </div>
  )
}
