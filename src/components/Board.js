import React from 'react';
import List from './List'

class Board extends React.Component {

    render () {
            return (
                <div>
                    <p> {this.props.boards.title}</p>
                    <list />
                </div>
                )
    }
}


export default Board