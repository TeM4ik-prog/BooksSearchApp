import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import "./App.scss"
import MainPage from "#pages/main"
import Header from "#widgets/header"
import Footer from "#widgets/footer"
import { Provider } from "react-redux";
import { store } from "#app/model/store.js"

function App() {


  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>

    </Provider>
  )
}

export default App
