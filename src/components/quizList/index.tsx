import { NavLink } from 'react-router-dom';
import { IQuizItem } from "../../types";

export const QuizList = ({quizList}:any) => {
    return (
        <ul>
                {
                    quizList.length ? (
                        quizList.map(({id, title, category, questions}:IQuizItem)=>{
                            return (
                                <NavLink to={`/quizes/${id}`} key={id}>
                                    <li>
                                        <h2>{title}</h2>
                                        <p>Category: {category}</p>
                                        <p>Total qestions: {questions.length}</p>
                                    </li>
                                </NavLink>
                            )
                        })
                    ):<h1>No quizes found</h1>
                }
            </ul>
    )
}