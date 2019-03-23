import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllCharacters, fetchCharacter } from '../../redux/actions/characters.actions';
import Header from '../../components/header';

class Heroes extends Component {
  componentDidMount() {
    this.props._onInitCharacters();
    this.props._onInitCharacter();
  }
  
  render() {
    return (
      <div className='heroes'>
        <Header/>
        <div className="heroes__container">
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    loading: state.charactersLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitCharacters: () => dispatch(fetchAllCharacters()),
    _onInitCharacter: () => dispatch(fetchCharacter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);