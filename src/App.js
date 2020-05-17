import React, { Component} from 'react';
//import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Todos from './Todos/Todos';
import Header from './Todos/layout/Header';
import AddTodo from './Todos/AddTodo';
import About from './Todos/pages/About';

class App extends Component {
  state = {
    todos: [
      
    ]
  }
  
  requestURL = 'https://jsonplaceholder.typicode.com/todos';

  //React lifecycle methods
  componentDidMount(){
    axios.get(this.requestURL.concat('?_limit=10'))
    .then( res => {
      //console.log( res );
      this.setState( {todos: res.data } );
    });
  }

  //Toggle completed iteams
  markComplete = ( id ) =>{
    console.log( 'From App.js ' + id );
    this.setState({ todos: this.state.todos.map( item => {
      if( item.id === id ){
        item.completed = !item.completed;
      }
      return item;
    }) });
  }

  //Delete Todo item
  delTodoItem = ( id ) =>{
    console.log( id );
    let request = this.requestURL.concat('/${').concat( id).concat('}');
    console.log( request );
    axios.delete( request ).then( res =>
      {
        this.setState({
          todos: [...this.state.todos.filter( (item) => 
            {
              if( item.id !== id ) return item;
              else return null;
            })]
        })
      });
    // this.setState({
    //   todos: [...this.state.todos.filter( (item) => 
    //     {
    //       if( item.id !== id ) return item;
    //       else return null;
    //     })]
    // });
  }

  //Add Todo Item
  addTodoItem = ( title ) =>{
    axios.post( this.requestURL, {
      title,
      completed: false
    }).then( res => {
      this.setState({
        todos: [...this.state.todos, res.data ]
      });
    });
    
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/todolist" render={ props => (
          <React.Fragment>
            <AddTodo addTodo = { this.addTodoItem }/>
            <Todos todos = { this.state.todos } 
              markComplete = { this.markComplete }
              delTodoItem = { this.delTodoItem }
              />
          </React.Fragment>
        )} />
        <Route exact path='/' component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
