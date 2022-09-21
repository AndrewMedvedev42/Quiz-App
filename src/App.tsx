import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpInBasePage } from "./pages/signUpInBase";
import { SignUpForm } from "./components/signUpForm";
import { SignInForm } from "./components/signInForm";
import { Main } from "./pages/Main";
import { Quiz } from "./pages/Quiz";
import { NavigationMenu } from "./components/navigationMenu";

function App(): JSX.Element {

  return (
    <Router>
      <NavigationMenu/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/search" element={<Main/>}/>
        <Route path="/about" element={<Main/>}/>
        <Route path="/quizes/:id" element={<Quiz/>}/>
        <Route path="/signin" element={<SignUpInBasePage title_text="Sign In" component={<SignInForm/>}/>}/>
        <Route path="/signup" element={<SignUpInBasePage title_text="Sign Up" component={<SignUpForm/>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
