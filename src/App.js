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
      {console.table(this.state.boards)}
    <p> {this.state.boardTitle}</p>
    </div>
  );
  }
}

export default App;
