import { useEffect } from 'react';
import './Redirection.scss'



  

const Redirection = () => {


  useEffect(() => {

    // después hacer que esto sea guarde en localStorage y redireccione a Dashboard 

    const code = window.location.hash.split("#")[1].split('=')[1]
    localStorage.setItem('token', code)

    setTimeout(() => window.location = "/",3000)
  }, [])

  
  return (

    <>


      <div className='loading'>
        <div className="load-3">


          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

    </>
  )
}

export default Redirection