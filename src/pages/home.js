import React from 'react'
import Header from '../components/header/Header'
import TabBar  from '../components/tab/TabBar'
import Bag from '../components/bag/Bag'
import BottonToTop from '../components/botton/BottonToTop'
import FooterMain from '../components/footer/FooterMain'
import '../components/produto/produto.css'
import SecoesList from '../components/secoesList/SecoesList'


function Home() {
  return (
    <div className="App">
      <main>
        < Header />
         < TabBar />
         < SecoesList />
        < Bag />
        < FooterMain />
        < BottonToTop />
      </main>
    </div>
  )
}

export default Home
