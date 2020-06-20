import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types'


class BoardPreview extends React.Component {


    render () {

        return (
           <p>{this.props.boards.title},</p>
        )
    }
}

BoardPreview.PropType = {
    board: PropTypes.object.isRequired
}

export default BoardPreview