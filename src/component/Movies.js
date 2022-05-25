import Movie from "./Movie"

export default function Movies(props) {
    const { movies=[] } = props
    return (                
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : <h1>Not found</h1>}
        </div>
    )
}