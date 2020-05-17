import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    //console.log( this.props.todos );
    // if (this.state.hasError) {
    //   return <h1>Something went wrong.</h1>;
    // }
    // return (
    //   <div>
    //     <h1>Todo List</h1>
    //   </div>
    // );
    return this.props.todos.map( ( item ) =>(
    <TodoItem key={ item.id } todo={ item } 
      markComplete = { this.props.markComplete }
      delTodoItem = { this.props.delTodoItem }
      />
    )
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodoItem: PropTypes.func.isRequired
};

Todos.defaultProps = {
  // bla: 'test',
};

export default Todos;
