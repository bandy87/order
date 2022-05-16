import { createModel } from "@rematch/core";
import type { RootModel } from "./models";
import { UserData } from "../../schema/store";

export const auth = createModel<RootModel>()({
  state: {
    isLoggedIn: <boolean>false,
    userData: <UserData | null>null,
    authModalIsOpen: false,
  },
  reducers: {
    TOGGLE_MODAL(state, isOpen: boolean) {
      state.authModalIsOpen = isOpen;
    },
    AUTH_SET_USER(state, userData: UserData | null) {
      state.isLoggedIn = !(userData === null);
      state.userData = userData;
    },
  },
  effects: (dispatch) => ({
    toggleModal(isOpen: boolean) {
      dispatch.auth.TOGGLE_MODAL(isOpen);
    },
    setUser(userData: UserData) {
      window.localStorage.setItem("userId", String(userData.id));
      dispatch.auth.AUTH_SET_USER(userData);
    },
    resetUser() {
      window.localStorage.removeItem("userId");
      dispatch.auth.AUTH_SET_USER(null);
    },
  }),
});
