import { FC, useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { LoadingOutlined } from "@ant-design/icons";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../../graphql/queries";

import { Product } from "../../../schema/app/entity";
import { ProductListResponse } from "../../../schema/app/graphql";

const ProductListContainer: FC = () => {
  const { error, loading, data } = useQuery<ProductListResponse>(GET_PRODUCTS);
  const [productList, setProductList] = useState<Product[]>([]);
  // TODO: Paginaton
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    if (data === undefined) return;
    setProductList(data.allProducts.nodes);
    setPagination(data.allProducts.pageInfo);
  }, [data]);

  if (data === undefined || loading)
    return (
      <div>
        <LoadingOutlined spin />
      </div>
    );
  if (error !== undefined) return <div>{error.message}</div>;
  return (
    <>
      {productList.map((item: Product) => {
        return (
          <ProductListItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </>
  );
};

export default ProductListContainer;
