import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.scss'
import MainPage from './pages/MainPage/mainPage'
import Header from './components/particals/header/header'
import Footer from './components/particals/footer/footer'
import ParserPage from './pages/ParserPage/parserPage'
import AuthorPage from './pages/AuthorPage/authorPage'

function App() {


  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/parser' element={<ParserPage />} />

          <Route path='/author/:authorID' element={<AuthorPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
