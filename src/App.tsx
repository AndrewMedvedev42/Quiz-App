import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpInBasePage } from "./pages/signUpInBase";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignUpInBasePage title_text="SignIn" component={<p>Signin Form</p>}/>}/>
        <Route path="/signup" element={<SignUpInBasePage title_text="SignUp" component={<p>Signup Form</p>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
