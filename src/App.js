  import React from 'react';
import Home from './components/pages/Home'
import Board from './components/Board'
import data from './sampleData'
import './App.css';

class App extends React.Component {
  state = {
    boards: []
  }
  componentDidMount () {
    this.setState({boards: data.boards})

  }
  createNewBoard = board => {
    this.setState({boards: [...this.state.boards, board]})
  }
  render(){
    return (
      <div>
        <Home boards={this.state.boards}
          createNewBoard={this.createNewBoard} />
        <Board />
      </div>
      );
      } 
  }

export default App;
