import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/pages/Landing'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
