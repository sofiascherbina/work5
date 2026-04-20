import React, {Component} from "react";
class Count extends Component {
    state={
        count :0
    }
    componentDidMount(){
        console.log('component was added to DOM');
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component was updated');
        console.log(`prevProps : ${prevProps}, prevState : ${prevState}`);  
    }
    componentUnmount(){
        console.log('component was deleted');
        
    }
    increaseCout=()=>{
        this.setState(prevState=> ({
            count: prevState.count+1
        }))
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increaseCout}>+1</button>
            </>
        )
    }
}
export default Count