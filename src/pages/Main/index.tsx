import { useEffect, useState } from "react";
import axios from "axios";

import { QuizSearch } from "../../components/searchBar";
import { QuizList } from "../../components/quizList";


export const Main = ():JSX.Element => {

    const [quizList, setQuizList] = useState([])
    const [nameQuery, setNameQuery] = useState("")
    const [categoryQuery, setCategoryQuery] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/quizes?name=${nameQuery}&category=${categoryQuery}`)
            .then((res:any)=>{setQuizList(res.data)})
            .catch((error)=>{console.log(error);
        })
    },[categoryQuery, nameQuery])
    return (
        <section>
            <QuizSearch 
                setSearchQuery={setCategoryQuery}
                setNameQuery={setNameQuery}
            />
            <QuizList quizList={quizList}/>
        </section>
    )
}