import { Layout } from 'antd';

const { Content } = Layout;

interface ISignUpInBase {
    title_text:string,
    component:JSX.Element
}

export const SignUpInBasePage = ({title_text, component}:ISignUpInBase):JSX.Element => {
    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <h1>{title_text}</h1>
            {component}
        </Content>
    )
}