import './App.scss';
import '../src/_variables.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {

  return (
  <>
  <Header />
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/login" element={<Login />} />
  </Routes>

  </BrowserRouter>
  <Footer />
  </>
  )
}

export default App;
