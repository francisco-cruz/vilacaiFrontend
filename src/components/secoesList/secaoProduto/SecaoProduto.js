import React from 'react'
import Produto from '../../produto/Produto'
import './secao.css'


function SecaoProduto( { secao, allProdutos } ) {
  const secaoProdutos = allProdutos.filter(produto => produto.secao.id === secao.id)

  if (secaoProdutos.length === 0) {
    return null
  }

  return (
      <div className = "secao" >

        <div className='container_title'>
          <p className='tile_secao'>{secao.name}</p>
          <p className='qntd_secao'>10 opcões</p>
        </div>

        {secaoProdutos.map(data =>(
          <Produto key={data.id} data={data} />
        ))}

      </div>

   
  )
}

export default SecaoProduto
