import React, { Component } from 'react'

class Timer extends Component{
    constructor(props){
        super(props);
        this.setState={}
    }
    render(){
        return(
            <>
                 <p style={{fontWeight:400, fontSize:60, fontFamily:'sans-serif'}}>
                    5
                    <span style={{paddingRight:15,fontSize:25}}>m</span>
                    00
                    <span style={{fontSize:25}}>s</span>
                </p>
            </>
        );
    }
}
export default Timer;