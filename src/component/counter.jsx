import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                {this.props.children}
                <span className="badge badge-success">{this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
         );
    }
}
 
export default Counter;