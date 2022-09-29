import { Link } from 'react-router-dom'
import '../../styles/admin.css'
function HeaderAdmin () {

  return (
  <>
    <header>
    <h3>Olá, Admin.</h3>
    <Link to={"/"} className='btn-sair'>Sair</Link>
    </header>
    <div className='breadcrumb'>
      < Link>Page</Link><p>/page current</p>
    </div>
  </>
  )
}

export default HeaderAdmin