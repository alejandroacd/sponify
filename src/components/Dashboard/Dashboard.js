import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AlbumCard from '../AlbumCard/AlbumCard'
import './Dashboard.scss'
import { useApi } from '../../ApiContext/api'
import { useFavoritesContext } from '../../FavoriteContext/favoritesContext'



const Dashboard = () => {

    const { getData, data } = useApi()
    const {favorites} = useFavoritesContext()
    const token = localStorage.getItem('token')
    const [search, setSearch] = useState();


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        console.log('Favoritos:' + JSON.stringify(favorites))
    }, [data,favorites])

    return (
        <>
            {!token && <Navigate to="/login" />}
            {token &&

                <div className='dashboard'>

                    <form className='search-form'>
                        <input type="text" onChange={handleChange} placeholder='Search some album! :)' autoFocus />
                        <button type='button' onClick={() => getData(search)}> Search </button>
                    </form>

                    <section className='results'>

                        {data.length === 0 &&

                            <div className='results__none'>


                                <h1> Search music albums and add your likes to Favorites! </h1>
                            </div>}
                       
                         {data.length > 0 &&
                            <>

                            <h1>Results from: "{search}"  </h1>
                                {data.map((x, y) => {
                                    return (
                                        <div key={y}>
                                            <AlbumCard title={x.name} image={x.images[0].url} artist={x.artists[0].name} releaseDate={x.release_date} />
                                        </div>
                                    )
                                })}
                            </> 
                        }


                    </section>

                </div>

            }


        </>
    )
}

export default Dashboard;