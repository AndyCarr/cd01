import React from 'react';
import Card from './Card'


class List extends React.Component{

    render () {
        return (
        <div>
        <p> A list Component </p>
        <Card />
        <Card />
        </div>
        )
    }

}


export default List