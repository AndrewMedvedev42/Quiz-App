import React from 'react';
import { Form, Button } from 'antd';
import { ISignUpWithSocialMedia } from 'types';

export function SignUpWithSocialMedia(
    props: ISignUpWithSocialMedia
): JSX.Element {
    const { text } = props;
    return (
        <Form>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {text}
                </Button>
            </Form.Item>
        </Form>
    );
}