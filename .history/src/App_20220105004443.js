import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/form';

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


function App() {
  return (
    <Form 
      //{...formItemLayout}
      //form={form}
      name="register"
      initialValues = {{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
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
 </Form>
    
  );
}

export default App;
