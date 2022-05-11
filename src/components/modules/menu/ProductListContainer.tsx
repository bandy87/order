import React, { FC, useState, useEffect } from 'react'
import ProductListItem from './ProductListItem'
import { LoadingOutlined } from '@ant-design/icons'

import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../../graphql/queries'

import { Product } from '../../../schema/app/entity'
import { ProductListResponse } from '../../../schema/app/graphql'

const ProductListContainer: FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)
  const [productList, setProductList] = useState([])
  // TODO: Paginaton
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    if (!data) return
    const rawProductList: ProductListResponse = data
    setProductList(rawProductList.allProducts.nodes)
    setPagination(rawProductList.allProducts.pageInfo)
  }, [data])

  if (!data || loading) return <div><LoadingOutlined spin /></div>
  if (error) return <div>{error.message}</div>
  return (
    <>
      {
        productList.map((item: Product) => {
          return <ProductListItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        })
      }
    </>
  )
}

export default ProductListContainer
