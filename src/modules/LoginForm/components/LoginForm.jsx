import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Block } from '../../../components';
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
    render() {
        return (
        <div>
            <div className="auth__top">
                <h2>Sign In</h2>
                <p>Sign In or Create Your Account</p>
            </div>
            <Block>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="username"
                        validateStatus='success'
                        hasFeedback
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        size='large'
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" to="#">
                            Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large'>
                            Sign in
                        </Button>
                    </Form.Item>
                        <Link className="auth__register-link" to='/register'>Registration</Link>
                </Form>
            </Block>
        </div>       
        )
    }
}

export default LoginForm;
