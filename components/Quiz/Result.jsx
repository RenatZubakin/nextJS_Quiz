import s from './Result.module.scss'
import {useSelector} from "react-redux";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Result(props) {


    const getRes = (ans, count) => {
        return (
            ans.filter(elem => elem.ans === true).length
        )
    }

    let state = useSelector(store => store ? store : []);
    console.log(state)
    let res = state.filter(elem => elem.quiz_id === props.quizId)
    let count = res[0].quiz_count
    let grade =getRes(res[0].quiz_ans, count)

    return (
        <div className={s.result_container}>
            <h3>
                Ваш результат прохождения теста "{props.quizText}"
            </h3>

            <div className={s.grades}>

                Итог:{grade} из {count}
            </div>

            <Link href="/Quiz" className={s.goback}>
                <h2>Вернуться в каталог &rarr;</h2>
                <p>Страница с выбором тестов</p>
            </Link>
        </div>
    )
}