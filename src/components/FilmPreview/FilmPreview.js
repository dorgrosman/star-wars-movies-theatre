import React from 'react'
import { useDispatch } from 'react-redux';
import { filmSelected } from './../../store/action/FilmAction';

import './FilmPreview.scss'

export default function FilmPreview(props) {
    const film = props.film;
    const dispatch = useDispatch()

    const displayFilmDetails = (filmId) => {
        dispatch(filmSelected(filmId))
    }
   
    return (
        <div className="film-details">
                <a className="link" href="#details" onClick={() => displayFilmDetails(film.episode_id)} > {film.title}</a>
        </div>
    )
}
