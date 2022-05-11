import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../../graphql/queries'
import { LoadingOutlined } from '@ant-design/icons'
import { ProductDetailsResponse } from '../../../schema/app/graphql'
import ProductDetails from './ProductDetails'
import { Product } from '../../../schema/app/entity'

const ProductPage: FC = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_PRODUCT, { variables: { id: Number(id) } })
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    if (!data) return
    const response: ProductDetailsResponse = data
    setProductDetails(response.productById)
  }, [data])

  if (!data || loading) return <div><LoadingOutlined spin /></div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <ProductDetails product={productDetails as Product} />
    </div>
  )
}

export default ProductPage
