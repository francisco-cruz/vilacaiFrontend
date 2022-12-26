import React, { useState, useEffect } from "react";
import api from "../../services/api";
import SecaoProduto from "./secaoProduto/SecaoProduto";

function SecoesList() {
  const [allSecoes, setAllSecoes] = useState([]);
  const [allProdutos, setAllProdutos] = useState([]);

  useEffect(() => {
    async function getAllSecoes() {
      const response = await api.get("/sections");
      setAllSecoes(response.data.sections);
    }

    getAllSecoes();
    // console.log(allSecoes)
  }, []);

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get("/products");
      setAllProdutos(response.data);
    }

    getAllProdutos();
  }, []);

  return (
    <div className="secoes">
      {allSecoes.map((section) => (
        <SecaoProduto
          key={section.id}
          section={section}
          allProdutos={allProdutos}
        />
      ))}
    </div>
  );
}

export default SecoesList;
