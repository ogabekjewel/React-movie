import React from "react";

export default class Search extends React.Component {
    state = {
        search: 'panda',
        type: "all"
    }

    handleKey = (e) => {
        if(e.key === "Enter") {
            this.props.searchMovie(e.target.value, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render () {
        return (
            <div>
                <div className="input-group my-3">
                    <div className="form-outline mr-3">
                        <input type="search" 
                            className="form-control" 
                            placeholder="Search"
                            onChange={(e) => this.setState({search: e.target.value})} 
                            onKeyDown={this.handleKey} 
                        />
                    </div>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                            Search
                    </button>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" data-type="all" onChange={this.handleFilter} checked={this.state.type === "all"} />
                    <label className="form-check-label">All</label> 
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" data-type="movie" onChange={this.handleFilter} checked={this.state.type === "movie"} />
                    <label className="form-check-label">Movies only</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" data-type="series" onChange={this.handleFilter} checked={this.state.type === "series"} />
                    <label className="form-check-label">Series only</label>
                </div>
            </div>
        )
    }
}