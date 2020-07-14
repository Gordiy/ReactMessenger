import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';
import { Button, Block } from '../../../components';
import { Link } from 'react-router-dom';



class RegisterForm extends React.Component {
    render() {
        let success = false;
        if(!success) {
            return (
            <div>
                <div className="auth__top">
                    <h2>Register</h2>
                    <p>For login in your account please to register</p>
                </div>
                <Block>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="email"
                            validateStatus='success'
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your Email !' }]}
                        >
                            <Input size='large' prefix={<MailOutlined className="site-form-item-icon"/>}
                            placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            hasFeedback
                            validateStatus='success'
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
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password again!' }]}
                        >
                            <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size='large'>
                                Register
                            </Button>
                        </Form.Item>
                            <Link className="auth__register-link" to='/login'>Sign In</Link>
                    </Form>
                </Block>
            </div>       
        )} else {
            return (
                <div className="auth__success-block">
                    <div>
                        <ExclamationCircleTwoTone />
                    </div>
                    <h3>Confirm your Email</h3>
                    <p>We sent message confirmation link to your email.</p>
                </div>
            )
        }
    }
}

export default RegisterForm;
