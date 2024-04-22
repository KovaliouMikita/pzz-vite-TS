import Button from "./Button.js";
import OrderBucketList from "./OrderBucketList.js";
import { ProductList } from "../App.js";
import { useCallback } from "react";

interface OrderBucketProps {
  onChange: (arg0: string) => void;
  listProduct: ProductList[];
  setListProduct: any;
  remove: (arg0: ProductList) => void;
  totalPrice: number;
  setTotalPrice: (arg0: number) => void;
}

export default function OrderBucket({
  onChange,
  listProduct,
  setListProduct,
  totalPrice,
  setTotalPrice,
  remove,
}: OrderBucketProps) {
  const updateCount = useCallback(
    (product: ProductList) => {
      const item = listProduct.find(
        (i) => i.price === product.price || i.id === product.id
      );
      if (item != null) {
        item.countPizza = product.countPizza;
        setListProduct([...listProduct]);
      }
    },
    [listProduct]
  );
  return (
    <div className="OrderList">
      <h1>Order </h1>

      <div className="Scroll">
        {listProduct.map((li: any) => (
          <OrderBucketList
            li={li}
            remove={remove}
            updateCount={updateCount}
            key={li.id}
            onChange={(current: number) => setTotalPrice(totalPrice + current)}
          />
        ))}
      </div>

      {totalPrice !== 0 && <h1 style={{ bottom: "10px" }}>{totalPrice}</h1>}

      <div className="addButton">
        <Button isActive={true} onClick={() => onChange("OrderPage")}>
          Add
        </Button>
      </div>
    </div>
  );
}
