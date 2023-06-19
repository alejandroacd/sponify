import './App.scss';
import '../src/_variables.scss'
import Header from './components/Header/Header'
  import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Redirection from './components/Redirection/Redirection'
import  Favorites  from './components/Favorites/Favorites'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import {ApiProvider} from './ApiContext/api'
import { FavoritesProvider} from './FavoriteContext/favoritesContext'

function App() {

  return (


  <>
  

  <ApiProvider>
  <FavoritesProvider>
  <BrowserRouter>

  <Header />

  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route exact path="/redirection/" element={<Redirection />} />
    <Route exact path="/favorites" element={<Favorites />} />
  </Routes>

  </BrowserRouter>
  </FavoritesProvider>
  </ApiProvider>
  </>
  )
}

export default App;
