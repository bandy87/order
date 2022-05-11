import React, { FC } from 'react'
import styles from "../../../styles/ProductListItem.module.css";
import { ProductListItemProps } from '../../../schema/app/entity'
import { Link } from 'react-router-dom'
import { stringToSlug } from '../../../lib/helper'

const ProductListItem: FC<ProductListItemProps> = (props) => {
  const slug = stringToSlug(props.name)
  return (
    <Link className={styles.container} to={`/menu/${slug}/${props.id}`}>
      <img style={{width: '100%'}} src={(props.image && `/img/products/${props.image}`) || '/img/products/no-image.png'} alt="" />
      <h1 className={styles.title}>{props.name}</h1>
      <span className={styles.price}>{props.price} Ft</span>
    </Link>
  )
}

export default ProductListItem
