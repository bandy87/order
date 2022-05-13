import { Product } from "./entity";

export type LoginResponse = {
  data: {
    allUsers: {
      totalCount: number;
      nodes: [
        {
          id: number;
          name: string;
        }
      ];
    };
  };
};

export type ProductListResponse = {
  allProducts: {
    totalCount: number;
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
    };
    nodes: Product[];
  };
};

export type ProductDetailsResponse = {
  productById: Product;
};
