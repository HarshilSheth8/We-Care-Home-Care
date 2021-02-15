import React from 'react';
// import { withRouter } from 'react-router-dom';
import "./service-card.styles.css"


const Card = ({title, imageUrl, history, linkUrl, match, shortDesc} ) => {
    return (
        <div className={ "service-card card text-center shadow"}>
            <div className="overflow">
                <img src={imageUrl} style={{backgroundImage: `url(${imageUrl})`}} alt="" className="card-img-top background-image"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title.toUpperCase()}</h4>
                <p className="card-text text-secondary">{shortDesc}</p>
                <div className="btn btn-outline-primary" onClick={ () => history.push(`${match.url}${linkUrl}`)}>Book Now</div>
            </div>
        </div>        
    )    
};

export default Card;