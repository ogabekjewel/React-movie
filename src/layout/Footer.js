export default function Footer() {
    return (
        <>
            <div className="container-fluid">
                <footer className="d-flex bg-light flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center container">
                        <span className="text-muted">© {new Date().getFullYear()} Company, Inc</span>
                    </div>
                </footer>
            </div>
        </>
    )
}