import './AlbumCard.scss'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { useFavoritesContext } from '../../FavoriteContext/favoritesContext'


const AlbumCard = (props) => {
    const { addOrRemoveFromFavorites,favorites } = useFavoritesContext()
    const isInFavorites = favorites.find(x => x.image === props.image)
    const [pinned,setPinned] = useState(false);

    useEffect(() => {
        if(isInFavorites){
            setPinned(true)
        }
        if(!isInFavorites){
            setPinned(false)
        }
    },[pinned, addOrRemoveFromFavorites,isInFavorites])


    return (
       <div className='card'>
           <img src={props.image} loading="lazy" alt=""/>
           <h1> {props.title.substring(0,20)}... </h1>
           <p className='card__artistName' > {props.artist} </p>

           <div className='card__lastLine'>
            <p> Release: {props.releaseDate}   </p>
            <BsFillSuitHeartFill onClick={() => addOrRemoveFromFavorites(props)} size={25} color={pinned ? 'red' : 'grey'} />
           </div> 

       </div>
    )
}

export default AlbumCard