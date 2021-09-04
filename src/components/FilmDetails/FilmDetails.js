import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavFilms } from '../../store/action/FilmAction';
import { storageService } from './../../service/storageService';
import './FilmDetails.scss'


export default function FilmDetails() {

    const filmDetails = useSelector(state => state.filmsReducer.filmDetails)
    const favFilms = useSelector(state => state.filmsReducer.favFilms)
    const filmIsFav = useSelector(state => state.filmsReducer.filmIsFav)
    const dispatch = useDispatch()
    storageService.save('favFilm', favFilms)

    const toggleFavHandler = (() => {
        dispatch(toggleFavFilms(filmDetails.episode_id))
    })

    return (
        <div>
            {filmDetails ?
                <div className="film-card " id="details">
                    <div className="info-section">
                        <div className="film-header">
                            <h1>{filmDetails.title}</h1>
                            <h4 > <span className="date "> {filmDetails.release_date}</span>, {filmDetails.producer}</h4>
                        </div>
                        <div className="film-desc">
                            <p className="text">
                                {filmDetails.opening_crawl}
                            </p>
                        </div>
                        <div className="film-fav">
                            <ul>
                                <li><a onClick={() => toggleFavHandler()} ><i className={`${filmIsFav ? 'fas fa-heart' : 'far fa-heart'}`}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="blur-back "></div>
                </div>
                : (<h1 style={{color: "#A1CE9C"}}>Choose a film for more details</h1>)}
        </div>
    )
}



