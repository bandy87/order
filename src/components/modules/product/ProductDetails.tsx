import { FC, useState } from "react";
import { Row, Col } from "antd";
import { Product } from "../../../schema/app/entity";
import { Input, InputNumber, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../../store/store";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<Dispatch>();

  const addToCart = () => {
    dispatch.cart.addItem({
      product,
      quantity,
    });
  };

  return (
    <Row>
      <Col sm={24} md={12}>
        <div className="d-flex align-start justify-center">
          <img
            style={{ width: "100%", maxWidth: "500px" }}
            src={
              (product.image !== undefined &&
                `/img/products/${product.image}`) ||
              "/img/products/no-image.png"
            }
          />
        </div>
      </Col>
      <Col sm={24} md={12}>
        <h1>{product.name}</h1>
        <div>{product.description}</div>
        <div className="pt-6">
          <h2>{product.price} Ft</h2>
        </div>
        <Input.Group size="large">
          <InputNumber
            value={quantity}
            style={{ width: "100px)" }}
            onChange={setQuantity}
          />
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={addToCart}
          />
        </Input.Group>
      </Col>
    </Row>
  );
};

export default ProductDetails;
