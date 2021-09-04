import axios from 'axios'
export const SET_FILMS_LIST = 'SET_FILMS_LIST'
export const SET_SELECTED_FILM_DETAILS = 'SET_SELECTED_FILM_DETAILS'
export const SET_SELECTED_FAVORITE_FILM = 'SET_SELECTED_FAVORITE_FILM'

export const listFilms = () => {
    return async (dispatch) => {
        const res = await axios.get('https://swapi.dev/api/films/?format=json')
        dispatch({ type: SET_FILMS_LIST, payload: res.data.results })
    }
}

export const filmSelected = (id) => {
    return { type: SET_SELECTED_FILM_DETAILS, filmId: id }
}
export const toggleFavFilms = (id) => {
    return { type: SET_SELECTED_FAVORITE_FILM, filmId: id }
}

