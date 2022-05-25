export default function Movie(props) {
    const { Title, Year, Type, Poster } = props;

    return (
        <div className="col">
            <div className="card movie">
                <img src={Poster} className="card-img-top"  alt="rasm" />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Type} {Year}</p>
                </div>
            </div>
        </div>
    )
}