import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleSignIn from "../../google";
import { onFinish } from "./signUpHooks";

export const SignUpForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [googleUserData, setGoogleUserData] = useState({
        email: "",
        name: ""
    })
    return (
        <>
            <Form
            form={form}
            name="user_register"
            onFinish={(value)=>{onFinish(value, navigate)}}
        >
            <Form.Item
                name="user_name"
                label="Username"
                rules={[{ required: true }]}
                initialValue={googleUserData.name}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        type: 'email',
                        message: 'The input is not valid email!',
                    },
                ]}
                initialValue={googleUserData.email}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label='Password'
                rules={[
                    { required: true },
                    {
                        min: 8,
                        message: 'Password must be minimum 8 characters.',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label='Repeat password'
                rules={[
                    { required: true },
                    {
                        min: 8,
                        message: 'Password must be minimum 8 characters.',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
        <GoogleSignIn text="Sign Up with Google" setGoogleUserData={setGoogleUserData}/>
        <NavLink to="/signin">
            <Button type="link" htmlType="button">
                Sign In
            </Button>
        </NavLink>
    </>
    )
}