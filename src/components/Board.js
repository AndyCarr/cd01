import React from 'react';
import List from './List'
import data from '../sampleData'

class Board extends React.Component {
	state = {
		currentLists: []
	}

	componentDidMount() {
		this.setState({ currentLists: data.lists })
	}

	addBoardInput = React.createRef()
	createNewList = (e) => {
		e.preventDefault ()
		console.log(this.addBoardInput)	
	}

    render () {
    	return (
			<div>
				<div className="lists-wrapper">
				{Object.keys(this.state.currentLists).map(key => (
						<List 
						key={this.state.currentLists[key].id}
						list={this.state.currentLists[key]} />
						))}
				</div>
				<form onSubmit={this.creatNewList}
					className="new list-wrapper">
						<input 
							type="text" 
							name="name"
							ref={this.addBoardInput}
							placeholder=" + New List"/>
				</form>
			</div>
			)
    }
}


export default Board