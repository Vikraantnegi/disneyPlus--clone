/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { auth, provider } from '../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setSignOutState, setUserLoginDetails, UserImage, UserName} from "../../features/user/userSlice";
import './Header.css';

const MenuObjects = [
    {logo: '/assets/images/home-icon.svg', name: 'HOME', href: '/home'},
    {logo: '/assets/images/search-icon.svg', name: 'SEARCH', href: ''},
    {logo: '/assets/images/watchlist-icon.svg', name: 'WATCHLIST', href: ''},
    {logo: '/assets/images/original-icon.svg', name: 'ORIGINALS', href: ''},
    {logo: '/assets/images/movie-icon.svg', name: 'MOVIES', href: ''},
    {logo: '/assets/images/series-icon.svg', name: 'SERIES', href: ''},
]

const Header = () => {
    const dispatch = useDispatch();    
    const history = useHistory();
    const image = useSelector(UserImage);
    const name = useSelector(UserName);

    useEffect(() => {
        auth.onAuthStateChanged( async user => {
            if(user){
                setUser(user);
                // history.push('/home');
            }
        })
    }, [name])

    const setUser = user => {
        dispatch(setUserLoginDetails({
            name : user.displayName,
            email: user.email,
            image: user.photoURL,
        }))
    }

    const handleAuth = () => {
        if(!name){
            auth.signInWithPopup(provider)
                .then(res => {
                    setUser(res.user);
                })
                .catch(err => console.log(err))
        } else{
            auth.signOut()
                .then(res => {
                    dispatch(setSignOutState());
                    history.push('/');
                })
                .catch(err => console.log(err))
        }
        
    }

    return (
        <nav className="disney__header">
            <img className="header__logo" src="/assets/images/logo.svg" alt="logo" />         
            {image ? (
                <>
                    <div className="header__menu">
                        {
                            MenuObjects.map((obj, index) => {
                                return(
                                    <a href={obj.href} key={index} className="header__menuObject">
                                        <img src={obj.logo} alt={`${obj.name.toLowerCase()}-logoIcon`} className="header__menuObjectLogo" />
                                        <span className="header__menuObjectLabel">{obj.name}</span>
                                    </a>
                                );
                            })
                        }
                    </div> 
                    <div className="signOut__header">
                        <img className="header__userImage" alt="user-img" src={image} />
                        <div className="header__dropdown">
                            <span onClick={() => handleAuth()}>Sign Out</span>
                        </div>
                    </div>                    
                </>
            ) : (
                <a onClick={() => handleAuth()} className="header__authButton">LOGIN</a>
            )}
        </nav>
    )
}

export default Header
