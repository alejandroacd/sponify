import './AlbumCard.scss'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { useState } from 'react'

const AlbumCard = (props) => {

    const [pinned,setPinned] = useState(false);

    const saveOrDeleteInStorage = () => {
        console.log(props.title)
    }


    return (
       <div className='card'>
           <img src={props.image} />
           <h1> {props.title.substring(0,20)}... </h1>
           <p className='card__artistName' > {props.artist} </p>

           <div className='card__lastLine'>
            <p> Release: {props.releaseDate}   </p>
            <BsFillSuitHeartFill onClick={saveOrDeleteInStorage} size={25} color={`grey`} />
           </div> 

       </div>
    )
}

export default AlbumCard