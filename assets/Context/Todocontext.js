import React, {
    Component,
    createContext
} from 'react'

export const Todocontext = createContext();
export default class TodocontextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    // fetch

    // create


    // update

    //delete 

    render() {
        return ( <Todocontext.Provider value = {
                {
                    // ...this.state,
                    // createTodo: this.createTodo.bind(this),
                    // updateTodo: this.updateTodo.bind(this),
                    // deleteTodo: this.deleteTodo.bind(this),
                }
            } >

            {
                // this.props.children
            } </Todocontext.Provider>
        )
    }
}