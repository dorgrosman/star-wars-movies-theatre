import { SET_FILMS_LIST, SET_SELECTED_FILM_DETAILS, SET_SELECTED_FAVORITE_FILM } from '../action/FilmAction';
import { storageService } from './../../service/storageService';


const initialState = {
    films: [],
    favFilms: storageService.load('favFilm'),
    filmDetails: null,
    filmIsFav: false,
}


export const FilmListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS_LIST:
            return { ...state, films: action.payload }
        case SET_SELECTED_FILM_DETAILS:
            const selectedFilm = state.films.find(p => p.episode_id === action.filmId)
            if (state.favFilms) {
                const selected = state.favFilms.findIndex(p => p.episode_id === action.filmId);
                if (selected === -1) {
                    return { ...state, filmDetails: selectedFilm, filmIsFav: false }
                } else {
                    return { ...state, filmDetails: selectedFilm, filmIsFav: true }
                }
            } else {
                state.favFilms = []
                return { ...state, filmDetails: selectedFilm }
            }
        case SET_SELECTED_FAVORITE_FILM:
            const selectedFavFilm = state.films.find(p => p.episode_id === action.filmId)
            const selectedFav = state.favFilms.findIndex(p => p.episode_id === action.filmId)
            const isExisted = selectedFav
            if (isExisted !== -1) {
                const updatedFavFilms = state.favFilms.filter(p => p.episode_id !== action.filmId)
                return { ...state, favFilms: updatedFavFilms, filmIsFav: false }
            } else {
                return { ...state, favFilms: state.favFilms.concat(selectedFavFilm), filmIsFav: true }
            }
        default:
            return state
    }
}
