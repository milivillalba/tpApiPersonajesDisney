import { useState } from 'react'

import "./App.css"

import { ListarPersonajes } from './components/ListarPersonajes'


function App() {
  

  return (
    <>
    <div className='App'>
      
    <header className="App-header">
        <ListarPersonajes />
      </header>

    </div>

    </>
  )
}

export default App
