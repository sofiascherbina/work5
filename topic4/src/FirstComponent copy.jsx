import React, { Component } from 'react';
class FirstComponent extends Component{
    state={count:0,}
    handleIncrement = ()=> {
        this.setState((prevState)=>({
            count:prevState.count+1 
        }))
    }
    handleReduction = ()=> {
        this.setState((prevState)=>({
            count:prevState.count-1 
        }))
    }
    handleReset = ()=> {
        this.setState({count:0})
    }
    render(){
        return(
            <>
                <p>{this.state.count}</p>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleReduction}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </>
        )
    }
}
export default FirstComponent