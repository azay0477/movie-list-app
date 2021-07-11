import React from "react";

const CardDetails = (props) => {
    const details = props.location.state.cardDetails

    const goToHomePage = () => {
        props.history.push('/cards');
    }

    return (
        <div className="m-5">
            <button className="btn btn-primary m-3" onClick={goToHomePage}>Home</button>
            <h1>{details.title}</h1>
            <img className="card-img-top" height="200px" style={{ width: "auto" }} src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + details.poster_path} alt="Card image cap" />
            <div>
                Releasing on {details.release_date}
            </div>
            <p>{details.overview}</p>
        </div>
    )
}

export default CardDetails;
