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

  render () {
  return (
    <div>
      <Home boards={this.state.boards} />
    </div>

  );
  }
}

export default App;
