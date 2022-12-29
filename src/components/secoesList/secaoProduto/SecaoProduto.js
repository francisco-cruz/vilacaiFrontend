import React from "react";
import Produto from "../../produto/Produto";
import "./secao.css";

function SecaoProduto({ section, allProdutos }) {
  const ProductsOfTheSection = allProdutos.products.filter(
    (product) => product.section.id === section.id
  );

  if (ProductsOfTheSection.length === 0) {
    return null;
  }

  return (
    <div className="secao">
      <div className="container_title">
        <p className="tile_secao">{section.name}</p>
        <p className="qntd_secao">10 opcões</p>
      </div>

      {ProductsOfTheSection.map((product) => (
        <Produto key={product.id} data={product} allProducts={allProdutos} />
      ))}
    </div>
  );
}

export default SecaoProduto;
