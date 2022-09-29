import { Link } from "react-router-dom"
import HeaderAdmin from "../../components/headerAdmin/headerAdmin"

function AdminRecheio (){
  return(
    <div>
      < HeaderAdmin />
      <h1>Página de Recheios</h1>
      <table>
        <tr>
            <th>Administração</th>
        </tr>
        <tr>
            <td><Link to={"/secaoproduto"}>Seção de Produtos</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/produto"}>Seção de Produtos</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/secaorecheio"}>Seção de Produtos</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/recheio"}>Seção de Produtos</Link><div className='buttons-table'><button className='btn-editar'>Editar</button><button className='btn-excluir'>Excluir</button></div></td>
        </tr>

      </table>
    </div>
  )
}


export default AdminRecheio