import immerPlugin from "@rematch/immer";
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models/models";

export const store = init({
  models,
  plugins: [immerPlugin<RootModel>()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
