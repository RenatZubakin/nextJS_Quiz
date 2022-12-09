import s from './QuizNav.module.scss';
import Link from "next/link";

export default function QuizNav(props){
    return(
            <div className={s.test_numbers}>
                <div className={s.back_button}>
                    <img className={s.droplist} src="/droplist.png" alt=""/>
                </div>
                <div className={s.questions_numbers}>
                    {props.questions.map((elem) =>
                            <Link href={`/Quiz/${props.quizId}/${elem.question_id}`}  className={s.question_number}>{elem.question_id}</Link>
                    )}
                </div>
            </div>
    )
}