import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';


const Card = (props) => {
  const { character } = props;

  return (
    <div className="heroes__card">
      <Link to={{ pathname: `/character/${character.id}` }} >
        <figure className="heroes__card-img">
          <img 
            src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
            alt={character.name}
            className="heroes__card-photo"
          />
        </figure>
      </Link>
      <figcaption className="heroes__card-caption">
        <span className="heroes__card-caption--name">{character.name}</span>
        <span className="heroes__card-caption--details">Details</span>
      </figcaption>
    </div>  
  )
};

export default Card;