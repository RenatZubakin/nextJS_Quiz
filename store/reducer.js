import * as actions from './action_types';

export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_ANSWER':
            return addAnswer(state, action);
    }
}

function addAnswer(state, action) {
    let question_id = action.question_id;

    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].quiz_id === action.quiz_id) {
                console.log('есть уже такой квиз')
                if (state[i].quiz_ans.length > 0) {
                    for (let j = 0; j < state[i].quiz_ans.length; j++) {
                        if (state[i].quiz_ans[j].id === action.question_id) {
                            console.log('на этот вопрос уже отвечали')
                            state[i].quiz_ans[j] = {
                                id: action.question_id,
                                ans: action.answer_value,
                            }
                            return state
                        }
                    }
                    state[i].quiz_ans.push({
                        id: action.question_id,
                        ans: action.answer_value
                    })
                    return state
                } else {
                    state[i].quiz_ans.push({
                        id: action.question_id,
                        ans: action.answer_value
                    })
                }
                return state

            }
        }
        state.push(
            {
                quiz_id: action.quiz_id,
                quiz_count: action.count,
                quiz_ans: [{id: action.question_id, ans: action.answer_value}]
            }
        )
        return state
    } else {
        state.push(
            {
                quiz_id: action.quiz_id,
                quiz_count: action.count,
                quiz_ans: [{id: action.question_id, ans: action.answer_value}]
            }
        )
        return state
    }
}