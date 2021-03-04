import React, { useState,useEffect } from 'react'

const Stopwatch=(props)=>{
    const [seconds, setSeconds]= useState(0);
    const [millSec, setMillSec]= useState('00');
    useEffect(()=>{
        let x=0, secondsInterval=0;
        if(props.isStopwatchStarted){
            //setTimeout(()=>setSeconds(seconds+1), 1000);  
            x=setTimeout(()=>setMillSec(Number(millSec)+1), 10);
        } 
        if(millSec>99){
            secondsInterval= setSeconds(seconds+1)
            setMillSec(0);
            clearInterval(x);
           
        } 
        if(props.isStopWatchReset)  {

            setMillSec('00');
            setSeconds(0);
            clearInterval(secondsInterval);
        }
        
    })
    return(
        <>
         <p style={{fontWeight:400, fontSize:60, fontFamily:'sans-serif'}}>
            {seconds}
            <span style={{paddingRight:15,fontSize:25}}>s</span>
            
            <span style={{paddingRight:10,fontSize:30}}>{millSec}</span>
         </p>
        </>
    );
    
}
export default Stopwatch;