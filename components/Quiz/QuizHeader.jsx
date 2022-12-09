import s from './QuizHeader.module.scss'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function QuizHeader(props){
    let router =useRouter()
    const [time,setTime]=useState(props.time)

    const getTime=(e)=>{
        return e.toString().padStart(2,'0')
    }

    const minutes=getTime(Math.floor(time/60))
    const seconds=getTime(time-minutes*60);

    useEffect(()=>{
        const interval=setInterval(()=>{setTime((time)=>(
            time >= 1 ? time-1 : 0
        ))},1000);
        return ()=>{
            clearInterval(interval);
        }
    },[])


    const timeEnd=async()=> {
        await router.push(`/Quiz/${props.quiz_id}/result`)
    }

    if (time===0){
        timeEnd()
    }



    return(
        <div className={s.test_header}>
            <div className={s.time_question_number}>
                <div className={s.test_number}>
                    <img className={s.image} src="/add.png"/>
                    <p className={s.current_quest_number}>
                        {props.current}/{props.total}
                    </p>
                </div>
                <div className={s.test_time}>
                    <img className={s.image} src="/add.png"/>
                    <p className={s.current_quest_number}>
                        {minutes}:{seconds}
                    </p>
                </div>
            </div>
            <div className={s.test_theme}>
                <p>{props.theme}</p>
            </div>
            <div className={s.logo}>
                <img src="/minilogo.png" alt=""/>
            </div>
        </div>
    )
}


const Timer =()=> {

}