import React from 'react';
import Aux from '../../hocs/Aux';
import './Card';


const Card = (props) => {
  const { character } = props;

  return (
    <Aux>
      <div className="heroes__card">
        <figure className="heroes__card-img">
          <img 
            src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
            alt={character.name}
            className="heroes__card-photo"
          />
        </figure>
      </div>  
    </Aux>
  )
};

export default Card;