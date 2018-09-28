import React , { Component } from 'react'
import 'bulma/css/bulma.css'

class TodoItem extends Component {
    render() {
        return (
            <a className="panel-block">
                {this.props.todo.text}
            </a>
        )
    }
}
export default TodoItem;