/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Header.css';

const MenuObjects = [
    {logo: '/assets/images/home-icon.svg', name: 'HOME'},
    {logo: '/assets/images/search-icon.svg', name: 'SEARCH'},
    {logo: '/assets/images/watchlist-icon.svg', name: 'WATCHLIST'},
    {logo: '/assets/images/original-icon.svg', name: 'ORIGINALS'},
    {logo: '/assets/images/movie-icon.svg', name: 'MOVIES'},
    {logo: '/assets/images/series-icon.svg', name: 'SERIES'},
]

const Header = () => {
    return (
        <nav className="disney__header">
            <img className="header__logo" src="/assets/images/logo.svg" alt="logo" /> 
            <div className="header__menu">
                {
                    MenuObjects.map((obj, index) => {
                        return(
                            <a key={index} className="header__menuObject">
                                <img src={obj.logo} alt={`${obj.name.toLowerCase()}-logoIcon`} className="header__menuObjectLogo" />
                                <span className="header__menuObjectLabel">{obj.name}</span>
                            </a>
                        );
                    })
                }
            </div> 
            <img className="header__userImage" alt="user-img" src="/assets/images/userImage.jpg" />
        </nav>
    )
}

export default Header
