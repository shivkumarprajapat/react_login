import React from 'react'
import Home from './components/Home'

const Hero = ({ handleLogout }) => {
    return (
        <div className="hero">
            <nav>
                <Home />

                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default Hero
