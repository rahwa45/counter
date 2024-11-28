import React, {useState, useEffect } from "react"

const Counter=()=>{
  const [count, setCount]=useState(0)
  const [isStart, setIsStart]=useState(false);
  const [isStop, setIsStop]=useState(true);


  useEffect(()=>{
    let timer;
    if(isStart){
      timer=setInterval(()=>{
        setCount(c=>c+1);
      }, 1000);
      
    }else{

      clearInterval(timer);
  }
      return () => clearInterval(timer);
 

  }, [isStart]);

  const handleStart=()=>{
        setIsStart(true);
        
    }

    const handleStop=()=>{
      
      setIsStart(false);
   }


  return (
    <div className="container">
      <div className="contain1">

      <p>{count}</p>

    <div className="contain2">

    <button onClick={handleStart} disabled={isStart}id="start">Start</button>
    <button onClick={handleStop} disabled={!isStop}id="stop">Stop</button>

    </div>
      </div>
    
   
    </div>

  )
}
export default Counter