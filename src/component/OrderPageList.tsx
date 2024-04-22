import { useState } from "react";
import Button from "./Button";
import { ProductList } from "../App";

interface OrderPageListProps {
  title: string;
  discription: [];
  image: string;
  price: number;
  remove: any;
  li: ProductList;
  countPizza: number;
  onChange: any;
}
export default function OrderPageList({
  title,
  discription,
  image,
  price,
  remove,
  li,
  countPizza,
  onChange,
}: OrderPageListProps) {
  const [count, setCount] = useState(countPizza);
  li.countPizza = count;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt="image"
            style={{ height: "100px", width: "100px" }}
          />
          <h1>{title}</h1>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {discription.map((p: any) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex" }}>
          <Button
            onClick={function () {
              setCount(count - 1);
              onChange(-price);
            }}
          >
            -
          </Button>
          <h2>{count}</h2>
          <Button
            onClick={function () {
              setCount(count + 1);
              onChange(+price);
            }}
          >
            +
          </Button>
        </div>
        <h1>{price}</h1>
        <Button onClick={() => remove(li)}>X</Button>
      </div>
    </div>
  );
}
