import React, { useContext, useState, createContext } from "react";
import axios from 'axios'


const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext)
}


export const ApiProvider = ({ children }) => {
    
    const [data, setData] = useState([])
    const getData = (query) => {

        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${query}&type=album&market=ES&offset=5`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        axios(config)
        .then(response => {
            setData(response.data.albums.items)
           
        })
        .catch(e => console.log(e.message))
    }


    const value = {
        data,
        setData,
        getData
    }

    return (
        <ApiContext.Provider value={value} >
            {children}
        </ApiContext.Provider>
    )
}
