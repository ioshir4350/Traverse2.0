import React from 'react'

function PlatNavbar() {

    const logoutHandler = () => {
        localStorage.clear()
        window.location = '/'
    }

    return (
        <div>
            <header className="homepage-header">
                    <img src="img/logo.png" className="homepage-logo"/>
                    <ul className="home-nav">
                        <li><a href="/messages" className="plat-nav-item">Messages</a></li>
                        <li><a href="/friends" className="plat-nav-item">My Friends</a></li>
                        <li><a href={'/profile/' + JSON.parse(localStorage.getItem('userObj')).username} className="plat-nav-item">Profile</a></li>
                        <li><a className="plat-nav-item" onClick={logoutHandler}>Log Out</a></li>
                    </ul>
                </header>
        </div>
    )
}

export default PlatNavbar;