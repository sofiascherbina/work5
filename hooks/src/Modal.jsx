import { Component } from "react";
export default class Modal extends Component{
    render(){
        return(
            <>
            <h1>hey</h1>
            <button onClick={this.props.onClose}>Close</button>
            </>
        )
    }
}