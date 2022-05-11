import { Models } from '@rematch/core'
import { app } from './app'
import { auth } from './auth'
import { cart } from './cart'

export interface RootModel extends Models<RootModel> {
  app: typeof app
  auth: typeof auth
  cart: typeof cart
}

export const models: RootModel = { app, auth, cart }
