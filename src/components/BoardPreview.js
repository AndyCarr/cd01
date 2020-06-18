import React from 'react';

class BoardPreview extends React.Component {


    render () {

        return (
           <p>{this.props.boards.title},</p>
        )
    }
}


export default BoardPreview