import logo from './logo.svg';
import React, { useState } from 'react';
import { Form, Button, Input, InputNumber, Select, AutoComplete, gutter, Row, Col, Checkbox } from 'antd';


import './App.css';


function App() {
  
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegForm =()=>{

const [Form] = Form.useForm();

const [autoCompleteResult, setAutoCompleteResult] = useState([]);

const onWebsiteChange = (value) => {
  if (!value) {
    setAutoCompleteResult([]);
  } else {
    setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
  }
};
const websiteOptions = autoCompleteResult.map(website => ({
  label: website,
  value: website,
}));
}
  return (
    <Form 
      {...formItemLayout}
     // form={form}
      name="register"
      initialValues = {{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '91',
      }}
      scrollToFirstError
    >
    <Row gutter={[15]}>
      <Col xs={24} sm={12} lg={12}>
    <Form.Item
      name="email"
      label="E-mail"
      rules={[
     {
       type: 'email',
       message: 'The input is not valid E-mail!',
     },
     {
       required: true,
       message: 'Please input your E-mail!',
     },
   ]}
 >
   <Input />
 </Form.Item>
 </Col>
 <Col xs={24} sm={12} lg={12}>
 <Form.Item
   name="password"
   label="Password"
   rules={[
     {
       required: true,
       message: 'Please input your password!',
     },
   ]}
   hasFeedback
 >
   <Input.Password />
 </Form.Item>
 </Col>
 <Form.Item
   name="confirm"
   label="Confirm Password"
   dependencies={['password']}
   hasFeedback
   rules={[
     {
       required: true,
       message: 'Please confirm your password!',
     },
     ({ getFieldValue }) => ({
       validator(_, value) {
         if (!value || getFieldValue('password') === value) {
           return Promise.resolve();
         }
         return Promise.reject(new Error('The two passwords that you entered do not match!'));
       },
     }),
   ]}
 >
   <Input.Password />
 </Form.Item>
 </Row>
 <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
 </Form>
    
  );
}

export default App;
