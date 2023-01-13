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
        <p className="qntd_secao">{allProdutos.products.length} opcões</p>
      </div>

      {ProductsOfTheSection.map((product) => {
        const image = `http://127.0.0.1:3333${product.image.file_src}`;
        const newProduct = {...product, img: image};
        return <Produto key={product.id} {...newProduct} allProducts={allProdutos} />
      })}
    </div>
  );
}

export default SecaoProduto;
