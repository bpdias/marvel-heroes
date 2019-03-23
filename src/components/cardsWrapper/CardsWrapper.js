import React from 'react';
import Card from '../card';
import Spinner from '../../components/spinner'
import './CardsWrapper.scss'

const CardsWrapper = (props) => {
  const { characters } = props;
  
  return (
    <div className="heroes__container">
      { 
        characters ? 
        characters.results.map(
          character => <Card character={character} key={character.id}/>
        ) : <Spinner/>
      }    
    </div>
  )
};

export default CardsWrapper;