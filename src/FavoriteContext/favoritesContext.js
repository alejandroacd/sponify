import React, { useContext, useState, createContext } from "react";

const FavoritesContext = createContext();

export const useFavoritesContext = () => {
    return useContext(FavoritesContext)

}
export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    //Función que guarda los álbumes en favoritos
    
    const addOrRemoveFromFavorites = (item) => {
        const newObj = {
            title: item.title,
            image: item.image,
            artist: item.artist,
            releaseDate: item.releaseDate
        }

        const exist = favorites.find(x => x.title === newObj.title);

        if(exist){
            const newArray = favorites.filter(x => x.item !== newObj.item);
            setFavorites(newArray)
            localStorage.setItem('favorites', JSON.stringify(newArray))
            console.log('Album has been eliminated from Favorites')
        }

        if(!exist) {
            const arrayTicket = [...favorites,newObj]
            setFavorites(arrayTicket)
            localStorage.setItem('favorites', JSON.stringify(arrayTicket))
            console.log('Album has been included in Favorites')
        }


    }

    const value = {
        favorites,
        setFavorites,
        addOrRemoveFromFavorites
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )


}