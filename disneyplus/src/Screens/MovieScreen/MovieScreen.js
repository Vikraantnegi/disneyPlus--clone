import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './MovieScreen.css'
import db from '../../firebase'

const MovieScreen = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        db.collection('movies')
            .doc(id)
                .get()
                    .then(doc => {
                        if(doc.exists){
                            setData(doc.data())
                        } else{
                            console.log('No such Movie available right now!')
                        }
                    })
                    .catch(err => console.log(err))
    }, [id])

    return (
        <div className="disneyPlus__content">
            <div className="content__background">
                {data.backgroundImg && <img className="backgroundContent" src={data.backgroundImg} alt={`${data.title}-backgroundImage`} />}                
            </div>
            <div className="content__image">
            {data.titleImg &&<img className="background__details" src={data.titleImg} alt={`${data.title}-titleImage`} />} 
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
                {data.subTitle}
            </div>
            <div className="content__description">
                {data.description}
            </div>
        </div>
    )
}

export default MovieScreen
