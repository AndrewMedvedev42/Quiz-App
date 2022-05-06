import axios from "axios";

export const signUpUser = (values:any) => {
    axios.post('http://localhost:8000/signup', values)
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error);
    })
}