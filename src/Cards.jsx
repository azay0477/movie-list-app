import React, { useState, useEffect } from "react";

function Cards(props) {

    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [1]);

    const getMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setAllMovies(data.results)
            });
    };

    const Gotodetailpage = (movie) => {
        props.history.push(`/card/${movie.id}/details`, { cardDetails: movie })
    };

    const getMovie = (movie) => {
        return (
            <div onClick={() => Gotodetailpage(movie)} className="card p-1" >
                <img className="card-img-top" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <a href="#" className="btn btn-primary" >Overview</a>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="row">
                {allMovies?.map((movie) => {
                    return (
                        <div className="col-4" key={movie.id}>
                            {getMovie(movie)}
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Cards;
