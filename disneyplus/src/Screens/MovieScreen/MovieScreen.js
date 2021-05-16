import React from 'react'
import './MovieScreen.css'

const MovieScreen = () => {
    return (
        <div className="disneyPlus__content">
            <div className="content__background">
                <img className="backgroundContent" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </div>
            <div className="content__image">
                <img className="background__details" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </div>
            <div className="content__controls">
                <button className="playButton">
                    <img src="/assets/images/play-icon-black.png" alt="play-buttonIcon" className="" /> 
                    <span>PLAY</span>
                </button>
                <button className="trailerButton">
                    <img src="/assets/images/play-icon-white.png" alt="trailer-buttonIcon" className="" />
                    <span>TRAILER</span>
                </button>
                <button className="addToWishlist">
                    <span>+</span>
                </button>
                <button className="GroupWatch">
                    <img src="/assets/images/group-icon.png" alt="groupWatch-buttonIcon" className="" />
                </button>
            </div>
            <div className="content__points">
                2018 &bull; 7m &bull; Family, Fantasy, Kids, Animation
            </div>
            <div className="content__description">
                A Chinese mother who's sad when her grown son leaves home gets another chance at mother when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </div>
        </div>
    )
}

export default MovieScreen
