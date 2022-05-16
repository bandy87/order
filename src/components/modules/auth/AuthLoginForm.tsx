import { FC, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import useLogin from "../../../hooks/auth/useLogin";

type LoginFormFields = {
  email: string;
  password: string;
};

export const AuthLoginForm: FC<{ onLoggedIn: CallableFunction }> = ({
  onLoggedIn,
}) => {
  const [form] = Form.useForm();

  const { doLogin, loading, isSuccess, error } = useLogin();
  useEffect(() => {
    if (error === undefined) return;
    console.error(error);
  }, [error]);

  const login = useCallback(
    (fields: LoginFormFields) => {
      void (async (fields: LoginFormFields) => {
        await doLogin(fields);
      })(fields);
    },
    [doLogin]
  );

  useEffect(() => {
    if (isSuccess) {
      onLoggedIn();
    }
  }, [isSuccess]);

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      onFinish={login}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password autoComplete="none" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button loading={loading} type="primary" block={true} htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
