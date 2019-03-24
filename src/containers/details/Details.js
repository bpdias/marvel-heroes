import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCharacter } from '../../redux/actions/characters.actions';
import Navbar from '../../components/navbar';
import Character from '../../components/character';
import CharecterDesc from '../../components/characterDesc';
import './Details.scss';

class Details extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchCharacter(id);
  }
  
  fetchCharacter = (id) => {
    this.props._onInitCharacter(id);
  }
  
  render() {
    return (
      <div className='details'>
        <Navbar/>
        <div className='details__container'>
          <Character character={this.props.character}/>
          <CharecterDesc character={this.props.character}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character.characters.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitCharacter: id => dispatch(fetchCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);