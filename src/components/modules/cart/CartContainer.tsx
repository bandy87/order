import React, { FC } from 'react'
import { Drawer, Row, Col, Space, Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../../store/store'
import { CartProduct } from '../../../schema/app/entity'

const CartContainer: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const cartIsOpen = useSelector((state: RootState) => state.app.cartIsOpen)
  const products = useSelector((state: RootState) => state.cart.products)
  const onCartClose = () => {
    dispatch.app.toggleCart(false)
  }

  return (
    <Drawer placement="right" onClose={() => onCartClose()} visible={cartIsOpen} title="CART">
      <div>
        <Space direction="vertical" size={1} style={{width: '100%'}}>
        {
          products.map((item: CartProduct) => {
            return (
            <div key={item.id}>
              <Row>
                <Col xs={10} sm={10}>
                  { item.name}
                </Col>
                <Col xs={3} sm={3} xl={1}>
                  { item.quantity }
                </Col>
                <Col>
                  { item.quantity * item.price } Ft
                </Col>
              </Row>
              <Divider orientationMargin={5} plain />
            </div>
            )
          })
        }
        </Space>
      </div>
    </Drawer>
  )
}

export default CartContainer
