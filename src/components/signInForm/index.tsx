import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import GoogleSignIn from "../../google";

export const SignInForm = () => {
    const [form] = Form.useForm();
    const [googleUserData, setGoogleUserData] = useState({
        email: "",
        name: ""
    })
    return (
        <>
            <Form
            form={form}
            name="user_register"
        >
            <Form.Item
                name="firstname"
                label="Username"
                rules={[{ required: true }]}
            >
                <Input />
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
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Sign In
                </Button>
            </Form.Item>
        </Form>
        <GoogleSignIn text="Sign In with Google" setGoogleUserData={setGoogleUserData}/>
        <NavLink to="/signup">
            <Button type="link" htmlType="button">
                Sign Up
            </Button>
        </NavLink>
    </>
    )
}