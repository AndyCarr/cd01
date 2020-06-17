import React from 'react';
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

  render () {
  return (
    <div>
    {this.state.boards.map(board =>(
      <Board board={board} />
        ))} 
    </div>

  );
  }
}

export default App;
