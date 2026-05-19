import { useState, useEffect } from "react";

export default function Timer(){
    const [time, setTime] = useState(()=>{
        const saved = localStorage.getItem('seconds')
        return saved ? {
            seconds: Number(saved),
            isRunning: false,
            intervalId:null
        }
        : {
            seconds: 0,
            isRunning: false,
            intervalId:null
        }
    });
    useEffect(()=>{
            localStorage.setItem("seconds", time.seconds);

            console.log("Timer status changed");
    },[time.seconds])

    const startTimer = () => {
    if (time.isRunning) return;

    setTime(prev=>({
        ...prev, 
        isRunning: true })); 

    time.intervalId = setInterval(() => {
          setTime(prev => ({
            ...prev,
            seconds: prev.seconds + 1,
          }));
        }, 1000);
    };

    const stopTimer = () => {
        setTime(prev=>({
            ...prev, 
            isRunning: false }));
        clearInterval(time.intervalId);
    };

    const resetTimer = () => {
        clearInterval(time.intervalId);
        setTime(prev=>({
            ...prev, 
            seconds: 0 }));
        localStorage.removeItem("seconds");
    };


     return (
      <div>
        <h2>Timer: {time.seconds}</h2>

        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
}