import s from './QuizBody.module.scss'
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import RadioButton from "../Buttons/RadioButton";
import Button from "../Buttons/Button";
import Timer from "./Timer";
import Image from "next/image";
import Audio from "./Audio";
import {useEffect, useState} from "react";
import * as actions from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

export default function QuizBody(props) {
    const dispatch = useDispatch();
    const router = useRouter()
    let [buttonLock,setButtonLock]=useState(true);

    const [answers, setAnswers] = useState(props.current_question.question_answers.map((elem, index) => {
        return {
            text: elem.text,
            checked: false,
            disabled: false,
            valid: elem.valid,
            index: index,
        }
    }));

    useEffect(() => {
        setAnswers(props.current_question.question_answers.map((elem, index) => {
            return {
                text: elem.text,
                checked: false,
                disabled: false,
                valid: elem.valid,
                index: index,
            }
        }))
    }, [props]);

    const isOnChecked = index => {
        setAnswers(answers.map(elem => {
            return elem.index === index ? {...elem, checked: true} : {...elem, checked: false}
        }))
        setButtonLock(false);
    }

    const isButtonOnSubmit = async () => {
        let ans = answers.filter(elem => elem.checked === true)
        if (ans.length !== 0) {
            dispatch(actions.ADD_ANSWER(
                {
                    type:'ADD_ANSWER',
                    quiz_id:props.quiz_id,
                    question_id:props.current_question.question_id,
                    answer_value:ans[0].valid,
                    count:props.total
                }
            ))
        }
        if(props.current_question.question_id===props.total){
            await router.push(`/Quiz/${props.quiz_id}/result`)
        }
        else{
            await router.push(`/Quiz/${props.quiz_id}/${props.current_question.question_id+1}`)
        }

    }


    return (
        <div className={s.test_content}>

            {
                props.current_question.question_img
                    ? <img className={s.quiz_img} src={props.current_question.question_img}/>
                    :
                    <div className={s.question_timer}>
                        {
                            props.current_question.question_time
                                ? <Timer onClick={()=>isButtonOnSubmit} time={props.current_question.question_time}/>
                                : ''
                        }
                    </div>
            }

            {
                props.current_question.question_audio
                    ? <Audio src={props.current_question.question_audio}/>
                    : ''
            }

            <div className={s.question_text}>
                {props.current_question.question_text}
            </div>

            <div className={s.question_answers}>
                {answers.map((elem) =>
                    <RadioButton onClick={() => isOnChecked(elem.index)} index={elem.index} text={elem.text}
                                 key={elem.text}
                                 checked={elem.checked} disabled={elem.disabled}
                                 value={elem.valid}
                    />
                )}
            </div>
            <div className={s.question_buttons}>
                {props.mode === 'numeric' ? <Button text={'Пропустить'} disabled={false}/> :
                    <Button text={'Пропустить'} disabled={true}/>}
                <Button onClick={() => isButtonOnSubmit()} text={'Ответить'} disabled={buttonLock}/>
            </div>

        </div>
    )
}