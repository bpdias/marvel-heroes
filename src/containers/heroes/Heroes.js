import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../../redux/actions/characters.actions';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import CardsWrapper from '../../components/cardsWrapper';
import './Heroes.scss'

class Heroes extends Component {
  componentDidMount() {
    this.fetchCharacter();
  }
  
  fetchCharacter = (query) => {
    this.props._onInitCharacters(query);
  }

  render() {
    return (
      <div className='heroes'>
        <Navbar onSearch={this.fetchCharacter} />
        <Header />
        <CardsWrapper characters={this.props.characters} />         
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitCharacters: query => dispatch(fetchAllCharacters(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);