import { useDispatch } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { Dispatch } from "../../store/store";
import { GET_USER } from "../../graphql/queries";

type FetcResponse = {

}

export default function useFetchUser() {
  const [getUser] = useLazyQuery(GET_USER);
  const dispatch = useDispatch<Dispatch>();

  const fetchUser = async () => {
    const userId = window.localStorage.getItem("userId");
    if (userId === null) {
      return null;
    }
    try {
      const { data } = await getUser({
        variables: {
          id: Number(userId),
        },
        fetchPolicy: "no-cache",
      });
    } catch (e) {
      console.error(e)
    }
  }
}
