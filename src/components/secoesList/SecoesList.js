import React, {useState, useEffect}  from "react"
import api from "../../services/api"
import SecaoProduto from "./secaoProduto/SecaoProduto"



function SecoesList () {
  const [allSecoes, setAllSecoes] = useState([])
  const [allProdutos, setAllProdutos] = useState([])

  
  useEffect(() => {
    async function getAllSecoes() {
      const response = await api.get('/SecaoProduto')
      setAllSecoes(response.data)
    }

    getAllSecoes()
  }, [])

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get('/produtos')
      setAllProdutos(response.data)
    }

    getAllProdutos()
  }, [])


  return (
    
    <div className='secoes'>
    {allSecoes.map(secao => (
      <SecaoProduto key={secao.id} secao={secao} allProdutos={allProdutos} />
    ))}
  </div> 

  )

}

export default SecoesList