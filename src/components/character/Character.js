
import React from 'react';
import Spinner from '../spinner'
import Aux from '../../hocs/Aux';
import './Character.scss'

const Character = (props) => {
  const { character } = props;  
  return (
    <div className='details__character'>
      { 
        character ? 
        <Aux>
          <figure className="details__character-img">
            <img 
              src={`${character.results[0].thumbnail.path}/portrait_xlarge.${character.results[0].thumbnail.extension}`}
              alt={character.results[0].name}
              className="details__character-photo"  
            />
          </figure>
          <div className="details__character-details">
            <ul>
              <li>{character.results[0].name}</li>
              <li>{`Comics: ${character.results[0].comics.available}`}</li>
              <li>{`Series: ${character.results[0].series.available}`}</li>
              <li>{`Stories: ${character.results[0].stories.available}`}</li>
            </ul>
          </div>
        </Aux>
        : <Spinner />        
      }
    </div>
  )
};

export default Character;