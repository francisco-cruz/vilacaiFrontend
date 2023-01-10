import React, { useState, useEffect } from "react";
import api from "../../services/api";
import SecaoProduto from "./secaoProduto/SecaoProduto";

function SecoesList() {
  const [allSecoes, setAllSecoes] = useState([]);
  const [allProdutos, setAllProdutos] = useState([]);

  async function getAllSecoes() {
      const response = await api.get("/sections");
      setAllSecoes(response.data.sections);
  }

  async function getAllProdutos() {
    const response = await api.get("/products");
    setAllProdutos(response.data);
  }

  useEffect(() => {
    getAllSecoes();
    getAllProdutos();
  }, []);

    return <div className="secoes">
      {allSecoes.map((section) => (
        <SecaoProduto
          key={section.id}
          section={section}
          allProdutos={allProdutos}
        />
      ))}
    </div>

}

export default SecoesList;
