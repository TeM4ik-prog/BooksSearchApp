import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.scss'
import MainPage from './pages/MainPage/mainPage'
import Header from './components/particals/header/header'
import Footer from './components/particals/footer/footer'

function App() {


  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
