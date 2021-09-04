
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './assets/scss/global.scss';
import FavFilmsPage from './pages/FavFilmsPage/FavFilmsPage';
import FilmDetails from './components/FilmDetails/FilmDetails';


function App() {

  return (
    <Router >
      <div className="App ">
        <Navbar />
        <div className="main-page container flex space-around">

          <Route path='/home' component={HomePage} />
          <Redirect from='/' to="/home" />

          <Route path='/favorite' component={FavFilmsPage} />
          {/* <Route path='/details' component={FilmDetails} /> */}
        </div>
      </div>
    </Router>
  )
}

export default App;
