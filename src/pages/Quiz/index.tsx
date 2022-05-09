import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Quiz = ():JSX.Element => {

    const [quiz, setQuiz] = useState({questions:[
        {
            questionText:"",
            answerOptions:[]}
    ]});

    let { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/quizes/${id}`)
            .then((res:any)=>{setQuiz(res.data)})
            .catch((error)=>{console.log(error);
        })
    })

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const getPercentageScore = () => {
        return Math.floor((score/quiz.questions.length)*100)
    }

	const handleAnswerOptionClick = (isCorrect:boolean) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
                    <h3>You scored {score} out of {quiz.questions.length}</h3>
                    <h1>{getPercentageScore()}%</h1>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz.questions.length}
						</div>
						<div className='question-text'>{quiz.questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{quiz.questions[currentQuestion].answerOptions.map((answerOption:any) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}