import {getQuizById} from "../api/hello";
import s from './TestPage.module.scss'
import QuizNav from "../../components/Quiz/QuizNav";
import QuizHeader from "../../components/Quiz/QuizHeader";
import QuizBody from "../../components/Quiz/QuizBody";
import {useState} from "react";
import Result from "../../components/Quiz/Result";

export default function Id(props) {


    return (
        <div className={s.test_page_container}>
            {
                props.id[1] === 'result'
                ? <Result quizId={props.id[0]} quizText={props.quizList.quiz_theme}/>
                : ''
            }

            {
                props.id[1] !== 'result' && props.quizList.quiz_mode === 'numeric'
                    ? <QuizNav quizId={props.quizList.quiz_id}
                               questions={props.quizList.quiz_questions}
                    />
                    : ''
            }
            {
                props.id[1] !== 'result'
                    ? <div className={s.test_header_content}>
                        <QuizHeader current={props.id[1]}
                                    total={props.quizList.quiz_questions.length}
                                    time={props.quizList.quiz_time}
                                    theme={props.quizList.quiz_theme}
                                    quiz_id={props.id[0]}
                        />

                        <QuizBody currentId={props.id[1]}
                                  quiz_id={props.id[0]}
                                  current_question={props.quizList.quiz_questions[props.id[1] - 1]}
                                  mode={props.quizList.quiz_mode}
                                  total={props.quizList.quiz_questions.length}
                        />
                    </div>
                    : ''
            }
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const {id} = context.params
    let currentTest = id[0]
    let quizList = await getQuizById(id)

    delete quizList[0]._id
    return {
        props: {quizList: quizList[0].Quiz[currentTest - 1], id: id},
    }
}