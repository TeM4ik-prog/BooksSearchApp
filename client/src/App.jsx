import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.scss'
import MainPage from './pages/MainPage/mainPage'
import Header from './components/particals/header/header'
import Footer from './components/particals/footer/footer'
import ParserPage from './pages/ParserPage/parserPage'

function App() {


  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/parser' element={<ParserPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
