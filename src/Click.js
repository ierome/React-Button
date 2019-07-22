import React, { Component } from 'react';

class Click extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.likes} {this.props.word}</button>
        )
    }
}
export default Click