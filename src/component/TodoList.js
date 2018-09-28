import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {

     constructor(props) {
         super(props)
         this.state = {
             todo : [],
             input: ''
         }
     }

     componentDidMount() {
         this.getData()
         
     }

     getData() {
         axios.get('http://localhost:3001/todo')
         .then(res => this.setState({
             todo: res.data
         })) //--> wait until axios have done 
     }

    renderTodoItem() {
        return (
            this.state.todo.map((todo) => {
                return(
                    <TodoItem key={todo._id} todo={todo}/>
                )
            })
        )
    }

    addTask(input) {
        console.log(input.target.value)
        this.setState({
            input: input.target.value
        })
    }

    onclickAddButton() {
        /*
        const newTodo = {
            id: this.state.todo.length,
            text: this.state.input
        }
        // this.setState({
            // todo: [...this.state.todo, newTodo]
        // })*/
        axios.post('http://localhost:3001/todo',{
            text: this.state.input
        })
        .then((res) => {
            console.log(res)
            this.getData()
        })
         
    }

    render() {
        return (
            <div className="hero is-medium is-info is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                           Todo List 
                        </h1>  
                        <div className="columns is-mobile">
                            <div className="column is-11">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Enter Task"
                                    onChange={(input) => this.addTask(input)}
                                />
                            </div>
                                    
                            <div className="column">
                                <a 
                                    className="button is-danger"
                                    onClick={() => this.onclickAddButton()}
                                >
                                Add
                                </a> 
                            </div>
                        </div>

                        <div className="column is-mobile">
                            <div className="column is-11">
                                {this.renderTodoItem()}      
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList;