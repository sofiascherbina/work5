import { useEffect, useState } from "react";
import css from "./feedBack.module.css";
export default function FeedBack(){
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        total : 0,
        positivePercentage : 0
    })
      const countTotalFeedback = () =>{
            return setState(prev=>({
                ...prev,
                total : prev.good + prev.neutral + prev.bad
            }))
     }
     const countPositiveFeedbackPercentage = () =>{
        return setState(prev =>({
            ...prev,
            positivePercentage : Math.round((prev.good * 100) / prev.total)
        }))
     }
    const handlerGood =() => {
         setState(prev=>({
            ...prev,
            good : prev.good + 1
         }))
        countTotalFeedback();
        countPositiveFeedbackPercentage();
    }
     const handlerNeutral =() => {
        setState(prev=>({
            ...prev,
            neutral : prev.neutral + 1
         }))
         useEffect(()=>{
            countTotalFeedback();
            countPositiveFeedbackPercentage();
         },[])
    }
     const handlerBad =() => {
         setState(prev=>({
            ...prev,
            bad: prev.bad + 1
         }))
        countTotalFeedback();
        countPositiveFeedbackPercentage();
    }
    return(
        <>
            <h2 className={css.title}>Please leave feedback</h2>
            <ul className={css.btn_list}>
                <li><button onClick={handlerGood} className={css.goodBtn}>Good</button></li>
                <li><button onClick={handlerNeutral} className={css.neutralBtn}>Neutral</button></li>
                <li><button onClick={handlerBad} className={css.badBtn}>Bad</button></li>
            </ul>
            <div>
                <h2 className={css.title}>Statistics</h2>
                <ul className={css.op_list}>
                    <li><p style={{color:"#5B841E", width:"fit-content"}}>Good : {state.good}</p></li>
                    <li><p style={{color:"#FEDE3A", width:"fit-content"}}>Neutral : {state.neutral}</p></li>
                    <li><p style={{color:"#d72d27", width:"fit-content"}}>Bad : {state.bad}</p></li>
                    <li><p style={{color:"#CFA3EA", width:"fit-content"}}>Total : {state.total}</p></li>
                    <li><p style={{color:"#005b96", width:"fit-content"}}>Positive feedback : {state.positivePercentage}%</p></li>
                </ul>
            </div>
        </>
    )
}