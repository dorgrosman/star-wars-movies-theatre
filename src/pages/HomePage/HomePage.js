import React from 'react'
import { useEffect } from 'react';
import FilmsList from './../../components/FilmsList/FilmsList';
import FilmDetails from '../../components/FilmDetails/FilmDetails';
import homePageImg from '../../assets/img/hero.webp'
import { useDispatch, useSelector } from 'react-redux';
import { listFilms } from './../../store/action/FilmAction';
import LoadingBox from './../../components/LoadingBox/LoadingBox';
import { storageService } from './../../service/storageService';
import './HomePage.scss'

export default function HomePage() {
    const dispatch = useDispatch();
    const filmsList = useSelector(state => state.filmsReducer)
    storageService.save('filmsList', filmsList)
    const { films } = filmsList;

    useEffect(() => {
        dispatch(listFilms({}))
    }, [])

    return (
        <div className="container">
            <span className={'hero'}>
                <img  src={homePageImg} alt="" />
            </span>
            {films.length !== 0 ? (<div className="home-page flex">
                <FilmsList films={films} />
                <FilmDetails />
            </div>) : (<LoadingBox />)}
        </div>
    )
}
