import './App.scss';
import '../src/_variables.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Redirection from './components/Redirection/Redirection'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import {ApiProvider} from './ApiContext/api'

function App() {

  return (


  <>
  
  <ApiProvider>
  <BrowserRouter>

  <Header />

  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route exact path="/redirection" element={<Redirection />} />
  </Routes>

  </BrowserRouter>

  </ApiProvider>
  </>
  )
}

export default App;
