import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import PropTypes from 'prop-types'
>>>>>>> proptypes

class Card extends React.Component {

    render () {
        return (
            <div className="card">
                <div className="card-body">
                    <p>{this.props.data.text}</p>   
                </div>
            </div>
        )
    }
}

Card.PropTypes ={
    data: PropTypes.object.isRequired
}

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card