import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{        
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    // markComplete = ( e ) =>{
    //     console.log( this.props );
    // }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange = { this.props.markComplete.bind( this, id ) } /> {' '}
                    { title }
                    <button 
                    onClick = { this.props.delTodoItem.bind( this, id ) } 
                    style = { btnStyle }>x</button>
                </p>
            </div>
        )
    }    
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodoItem: PropTypes.func.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
export default TodoItem
