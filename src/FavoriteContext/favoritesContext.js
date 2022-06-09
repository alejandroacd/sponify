import React, { useContext, useState, createContext } from "react";

const FavoritesContext = createContext();

export const useFavoritesContext = () => {
    return useContext(FavoritesContext)

}


export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    const addOrRemoveFromFavorites = (item) => {
 
    }
}