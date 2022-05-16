import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/queries";
import { Dispatch } from "../../store/store";
import { LoginResponse } from "../../schema/app/graphql";

type LoginFormFields = {
  email: string;
  password: string;
};

export default function useLogin() {
  const [login, { loading, error }] = useLazyQuery(LOGIN_USER);
  const dispatch = useDispatch<Dispatch>();
  const [isSuccess, setSuccess] = useState(false);

  const doLogin = async (values: LoginFormFields) => {
    try {
      const res: LoginResponse = await login({
        variables: {
          email: values.email,
          password: values.password,
        },
        fetchPolicy: "no-cache",
      });
      if (res.data.allUsers.totalCount !== 0) {
        dispatch.auth.setUser(res.data.allUsers.nodes[0]);
        setSuccess(true);
      }
    } catch (e) {
      console.error(error);
    }
  };

  return { doLogin, loading, error, isSuccess };
}
