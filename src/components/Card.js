import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {

    render () {
        return (
        <p> A Card Component </p>
        )
    }
}

Card.PropTypes ={
    data: PropTypes.object.isRequired
}

export default Card