import s from './quiz.module.scss'
import Image from "next/image";
import Link from "next/link";
import {getAllQuiz} from "../api/hello";





export default function Quiz(props) {
    console.log(props)
        return (
        <div className={s.quiz_catalog_cont}>
            <h2 className={s.quiz_catalog_title}> Каталог тестов</h2>
            <div className={s.quiz_catalog_test_list}>

                {
                    props.quizList.map(quiz=>{
                        return(
                            <Link href={`/Quiz/${quiz.quiz_id}/1`} className={s.quiz_catalog_item}>
                                <h3>{quiz.quiz_theme}</h3>
                                <img className={s.image}
                                     src={quiz.quiz_img}/>
                                <div className={s.quiz_item_info}>
                                    <p>Кол-во вопросов:{quiz.quiz_questions.length}</p>
                                    <p> Время на выполнение: {quiz.quiz_time}</p>
                                </div>
                            </Link>
                        )
                    })

                }
            </div>
        </div>
    )
}


export const getServerSideProps = async () => {
    const res = await getAllQuiz()
    delete res[0]._id

    return {
        props: {quizList: res[0].Quiz}
    }
}