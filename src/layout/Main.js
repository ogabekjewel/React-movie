import React from "react"
import Loader from "../component/Loader"
import Movies from "../component/Movies"
import Search from "../component/Search"

export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=689aa19b&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovie = (str, type = "all") => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=689aa19b&s=${str}${type !== "all" ? `&type=${type}` : "" }`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        return (
            <div className="container content">
                <Search searchMovie={this.searchMovie} />
                {this.state.loading ? <Loader /> : (<Movies movies={this.state.movies} />) }
            </div>
        )
    }
}