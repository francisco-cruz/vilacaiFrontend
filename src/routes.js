import React from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin/admin";
import SectionsProduct from "./pages/admin/secaoProduto/adminSecaoProduto";
import Products from "./pages/admin/produto/adminProduto";
import SectionsFillings from "./pages/admin/secaoRecheio/adminSecaoRecheio";
import Fillings from "./pages/admin/recheio/adminRecheio";
import CreateProduct from "./pages/admin/produto/createProduto";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/createProduct" element={<CreateProduct />} />

        <Route path="/admin/sectionsProduct" element={<SectionsProduct />} />
        
        <Route path="/admin/sectionsFillings" element={<SectionsFillings />} />
        <Route path="/admin/fillings" element={<Fillings />} />
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
