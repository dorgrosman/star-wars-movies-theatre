import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filmSelected } from './../../store/action/FilmAction';
import { toggleFavFilms } from '../../store/action/FilmAction';
import { Link } from 'react-router-dom';
import homePageImg from '../../assets/img/hero.webp'
import './FavFilmsPage.scss'


export default function FavFilmsPage() {

    const favFilms = useSelector(state => state.filmsReducer.favFilms)
    const dispatch = useDispatch()

    const toggleFavHandler = ((filmId) => {
        dispatch(toggleFavFilms(filmId))
    })
    const goToDetails = ((filmId) => {
        dispatch(filmSelected(filmId))
    })

    return (
        <div className="">
             <span className={'hero'}>
                <img  src={homePageImg} alt="" />
            </span>
            {(favFilms) ? (
                <ul className="fav-page  flex wrap justify-center">
                    {favFilms.map(favFilm =>
                        <li key={favFilm.episode_id}>
                            <div className="card-container flex ">
                                <div className="card flex column space-around">
                                    <header className="card-header flex space-between">
                                        <h5>{favFilm.title}</h5>
                                        <a onClick={() => toggleFavHandler(favFilm.episode_id)}><i className='fas fa-heart'></i></a>
                                    </header>
                                    <div >
                                        <p>{favFilm.release_date}</p>
                                    </div>
                                    <footer className="card-footer">
                                        <Link  to="/home" onClick={() => goToDetails(favFilm.episode_id)}   className="details-btn">More Details</Link>
                                    </footer>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            ) : (<h2 style={{color: "#A1CE9C"}}className="text-center">There Are No Favorite Movies Selected</h2>)
            }
        </div >
    )
}
