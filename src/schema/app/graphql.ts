import { Product } from './entity'

export type LoginResponse = {
  allUsers: {
    totalCount: number
    nodes: [
      {
        id: number
        name: string
      }
    ]
  }
}

export type ProductListResponse = {
  allProducts: {
    totalCount: number
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string
    },
    nodes: Product[] | any
  }
}

export type ProductDetailsResponse = {
  productById: Product
}
