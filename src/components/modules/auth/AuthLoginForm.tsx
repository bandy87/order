import React, { FC, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useLazyQuery } from '@apollo/client'
import { LOGIN_USER } from '../../../graphql/queries'
import { useDispatch } from 'react-redux'
import { Dispatch } from '../../../store/store'
import { LoginResponse } from '../../../schema/app/graphql'

const onFinishFailed = (values: any) => {
  console.error('onFinishFailed', values);
}

export const AuthLoginForm: FC<{onLoggedIn: Function}> = (props) => {
  const [getUser, { loading, error }] = useLazyQuery(
    LOGIN_USER
  )
  const dispatch = useDispatch<Dispatch>()
  const [form] = Form.useForm()

  useEffect(() => {
    if (!error) return
    console.error(error)
  }, [error])

  const onFinish = async (values: any) => {
    try {
      const res = await getUser({
        variables: {
          email: values.email,
          password: values.password
        },
        fetchPolicy: "no-cache"
      })
      const data: LoginResponse = res.data
      if (data.allUsers.totalCount) {
        dispatch.auth.setUser(data.allUsers.nodes[0])
        props.onLoggedIn()
        form.resetFields()
      }
    } catch (e) {
      console.error(error)
    }
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete="none" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button loading={loading} type="primary" block={true} htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}
