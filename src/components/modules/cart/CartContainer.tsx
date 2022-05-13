import { FC } from "react";
import { Drawer, Row, Col, Space, Divider } from "antd";
import { useSelector, connect } from "react-redux";
import { Dispatch, RootState } from "../../../store/store";
import { CartProduct } from "../../../schema/app/entity";

const mapDispatch = (dispatch: Dispatch) => ({
  closeCart: () => {
    dispatch.app.toggleCart(false);
  },
});

type CartContainerProps = ReturnType<typeof mapDispatch>;

const CartContainer: FC<CartContainerProps> = ({ closeCart }) => {
  const cartIsOpen = useSelector((state: RootState) => state.app.cartIsOpen);
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <Drawer
      placement="right"
      onClose={closeCart}
      visible={cartIsOpen}
      title="CART"
    >
      <div>
        <Space direction="vertical" size={1} style={{ width: "100%" }}>
          {products.map((item: CartProduct) => {
            return (
              <div key={item.id}>
                <Row>
                  <Col xs={10} sm={10}>
                    {item.name}
                  </Col>
                  <Col xs={3} sm={3} xl={1}>
                    {item.quantity}
                  </Col>
                  <Col>{item.quantity * item.price} Ft</Col>
                </Row>
                <Divider orientationMargin={5} plain />
              </div>
            );
          })}
        </Space>
      </div>
    </Drawer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect(null, mapDispatch)(CartContainer);
