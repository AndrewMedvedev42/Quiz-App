import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

import { QuizSearch } from "../components/searchBar";

import { IQuizItem } from "../types";

export const QuizList = ():JSX.Element => {

    const [quizList, setQuizList] = useState([])
    const [searchQuery, setSearchQuery] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:8000/quizes?category=${searchQuery}`)
            .then((res:any)=>{setQuizList(res.data)})
            .catch((error)=>{console.log(error);
        })
    },[searchQuery])
    return (
        <section>
            <QuizSearch setSearchQuery={setSearchQuery}/>
            <ul>
                {
                    quizList.length ? (
                        quizList.map(({id, title, category, questions}:IQuizItem)=>{
                            return (
                                <NavLink to={`${id}`} key={id}>
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
        </section>
    )
}