import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <main id="content">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App