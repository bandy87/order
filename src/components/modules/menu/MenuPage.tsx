import React, { FC } from 'react'
import styles from '../../../styles/ProductList.module.css'
import ProductListContainer from './ProductListContainer'

const MenuPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SELECT YOUR FAVORITE FOOD</h1>

      <div className={styles.wrapper}>
        <ProductListContainer />
      </div>
    </div>
  )
}

export default MenuPage
