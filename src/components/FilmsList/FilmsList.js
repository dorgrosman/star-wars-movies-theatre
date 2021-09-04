import React from 'react'
import './FilmsList.scss'
import FilmPreview from './../FilmPreview/FilmPreview';

export default function FilmsList(props) {
    const films = props.films;

    return (
        <div className="list-films">
            {films ? (
                <ul className={''}>
                    {films.map(film =>
                        <li key={film.episode_id}><FilmPreview key={film.episode_id} film={film} films={films}/></li>
                    )}
                </ul>
            ) : null}
        </div>
    )
}
