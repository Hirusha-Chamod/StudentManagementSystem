import React from 'react'
import { useSelector } from 'react-redux'


function Home() {

    const user = useSelector(state => state.user.value)

    return (
        <div>
            Hi Home
        </div>
    )
}

export default Home
