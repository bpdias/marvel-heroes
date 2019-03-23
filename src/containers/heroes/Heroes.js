import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllCharacters, fetchCharacter } from '../../redux/actions/characters.actions';
import Header from '../../components/header';
import Card from '../../components/card'
import Spinner from '../../components/spinner'
import Aux from '../../hocs/Aux'
import './Heroes.scss'

class Heroes extends Component {
  componentDidMount() {
    this.props._onInitCharacters();
  }
  
  render() {
    let cards = null;
    const characters = this.props.characters;
    if (characters) {
      cards = (
        <Aux>
          { characters.results.map((character) => {
            return (
              <Card character={character}/>
            )
          })}
        </Aux>
      )
    } else {
      cards = (
        <Aux>
          <Spinner />
        </Aux>
      );
    }
    
    return (
      <div className='heroes'>
        <Header/>
        <div className="heroes__container">
          {cards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters.data,
    loading: state.charactersLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitCharacters: () => dispatch(fetchAllCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);