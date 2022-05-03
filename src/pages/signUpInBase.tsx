import { Layout } from 'antd';

const { Content } = Layout;

export function SignUpInBasePage(props:any): JSX.Element {
    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <h1>{props.title_text}</h1>
            {props.component}
        </Content>
    )
}