import React, { useContext, useState, createContext } from "react";
import axios from 'axios'


const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext)
}


export const ApiProvider = ({ children }) => {
    
    const [data, setData] = useState([])
    const [loading,setLoading] = useState()


    const getData = (query) => {
        setLoading(true)
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
            setLoading(false)
           
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }


    const value = {
        data,
        setData,
        getData,
        loading
    }

    return (
        <ApiContext.Provider value={value} >
            {children}
        </ApiContext.Provider>
    )
}
