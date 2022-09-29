import React from 'react'
import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'

import Home from './pages/home';
import Admin from './pages/admin/admin'
import AdminSecaoProduto from './pages/admin/adminSecaoProduto';
import AdminProduto from './pages/admin/produto/adminProduto';
import AdminSecaoRecheio from './pages/admin/adminSecaoRecheio';
import AdminRecheio from './pages/admin/adminRecheio';


function Routes() {
    return (
      <BrowserRouter>
          <RoutesDom>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/secaoproduto" element={< AdminSecaoProduto />} />
              <Route path="/produto" element={< AdminProduto />} />
              <Route path="/secaorecheio" element={< AdminSecaoRecheio />} />
              <Route path="/recheio" element={< AdminRecheio />} />
          </RoutesDom>
      </BrowserRouter>
       
    )
}

export default Routes
