import axios from "axios";

export const onFinish = (values:any, navigate:any) => {
    axios.post('http://localhost:8000/signup', values)
        .then((res)=>{
            navigate("/")
        })
        .catch((error)=>{console.log(error);
    })
}