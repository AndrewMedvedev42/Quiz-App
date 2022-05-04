import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { SignUpWithSocialMedia } from './signUpWithSocialMedia';

export const SignUpForm = () => {
    const [form] = Form.useForm();
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
            <Form.Item
                name="password"
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
        <SignUpWithSocialMedia text="Sign Up with Google" />
        <NavLink to="/signin">
            <Button type="link" htmlType="button">
                Sign In
            </Button>
        </NavLink>
    </>
    )
}