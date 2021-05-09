import React from 'react'

function Hero(props) {
    const {handleLogout} = props;
    return (
        <section className = "hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick = {handleLogout}>Log-Out</button>
            </nav>
        </section>
    )
}

export default Hero
