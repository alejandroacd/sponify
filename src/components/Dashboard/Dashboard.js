import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const loggedStatus = localStorage.getItem('loggedStatus')
    const [isLogged, setLogged] = useState(false)

    useEffect(() => {
        if(loggedStatus !== null){
            setLogged(!isLogged)
        }
    }, [])

    return (
        <>
            {!isLogged && <Navigate to="/login"/>}
        </>
    )
}


export default Dashboard;