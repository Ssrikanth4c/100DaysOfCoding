import React, { Component } from 'react'

class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.setState={}
    }
    render(){
        return(
            <>
             <p style={{fontWeight:400, fontSize:60, fontFamily:'sans-serif'}}>
                0
                <span style={{paddingRight:15,fontSize:25}}>s</span>
                
                <span style={{paddingRight:10,fontSize:30}}>00</span>
                
            </p>
            </>
        );
    }
}
export default Stopwatch;