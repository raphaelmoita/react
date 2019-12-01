import React, { Component } from 'react';

class Hey extends Component {
    state = {
        message: "SUCCESS"
    }

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    }

    render() {

        return (
            <React.Fragment>
                <span className={ this.createMessage }>{ this.wrapperIt() }</span>
                <h2> =8-) </h2>
            </React.Fragment>
        );
    }
    
    createMessage() {
        const { message } = this.state; // object destructuring!
        let classes = "badge ";
        
        if (message === "SUCCESS") {
            classes += "badge-success";
        }
        else if (message === "WARNING") {
            classes += "badge-warning";
        }
        else { // ERROR
            classes += "badge-danger";
        }
        return classes;
    }

    wrapperIt() {
        const { message } = this.state; // object destructuring!
        return message
    }
}

export default Hey;