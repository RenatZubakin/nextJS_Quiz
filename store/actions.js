
export function ADD_ANSWER(values){
    return({
            type:'ADD_ANSWER',
            quiz_id:values.quiz_id,
            answer_value:values.answer_value,
            question_id:values.question_id,
            count:values.count,
        }
    )
};