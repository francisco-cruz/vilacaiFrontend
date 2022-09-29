import { Link } from 'react-router-dom'
import HeaderAdmin from '../../components/headerAdmin/headerAdmin'
import '../../styles/admin.css'

function Admin () {

  return (
    <div> 
      < HeaderAdmin />
      <table>
        <tr>
            <th>Administração</th>
        </tr>
        <tr>
            <td><Link to={"/secaoproduto"}>Seção de Produtos</Link><button className='btn-adicionar'>Adicionar</button></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/produto"}>Produtos</Link><button className='btn-adicionar'>Adicionar</button></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/secaorecheio"}>Seção de Recheios</Link><button className='btn-adicionar'>Adicionar</button></td>
        </tr>
        <hr/>

        <tr>
        <td><Link to={"/recheio"}>Recheios</Link><button className='btn-adicionar'>Adicionar</button></td>
        </tr>

      </table>
    </div>
  )
}

export default Admin
