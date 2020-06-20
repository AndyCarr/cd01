import React from 'react';
import Card from './Card'
import data from '../sampleData'


class List extends React.Component{

    render () 
    	{
        return (
        <div className="lists">
       	<div className="list-header">
        		 <p> List Comp: {this.props.list.title} </p>
        	</div>
        </div>
        )
    }

}


export default List