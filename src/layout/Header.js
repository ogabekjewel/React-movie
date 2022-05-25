export default function Header() {
    return (
        <>  
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light conatiner-fluid">
                    <div className="container">
                        <a className="navbar-brand" href="#">Movie</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                        </ul>
                        <button className="nav__button">Submit</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}