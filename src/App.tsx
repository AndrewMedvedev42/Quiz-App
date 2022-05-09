import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpInBasePage } from "./pages/signUpInBase";
import { SignUpForm } from "./components/signUpForm";
import { SignInForm } from "./components/signInForm";
import { QuizList } from "./pages/quizList";
import { Quiz } from "./pages/Quiz";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList/>}/>
        <Route path="/:id" element={<Quiz/>}/>
        <Route path="/signin" element={<SignUpInBasePage title_text="Sign In" component={<SignInForm/>}/>}/>
        <Route path="/signup" element={<SignUpInBasePage title_text="Sign Up" component={<SignUpForm/>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
