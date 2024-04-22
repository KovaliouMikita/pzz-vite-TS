import Button from "./Button";
import { ProductList } from "../App";

interface OrderBucketListProps {
  onChange: (arg0: number) => void;
  remove: (arg0: ProductList) => void;
  li: ProductList;
  updateCount: Function;
}

export default function OrderBucketList({
  onChange,
  remove,
  li,
  updateCount,
}: OrderBucketListProps) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={li.image}
          alt="image"
          style={{ height: "50px", width: "50px" }}
        />
        <h1>{li.title}</h1>
        <Button onClick={() => remove(li)}>x</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {li.discription.map((p: any) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Button
            onClick={function () {
              updateCount(li.countPizza - 1, li.id);
              onChange(-li.price);
            }}
          >
            -
          </Button>
          <h2>{li.countPizza}</h2>

          <Button
            onClick={function () {
              updateCount(li.countPizza + 1, li.id);
              onChange(+li.price);
            }}
          >
            +
          </Button>
        </div>
        <h2>{li.price}</h2>
        <p onChange={() => onChange(+li.price)}>{li.countPizza * li.price}</p>
      </div>
      <hr style={{ color: "white" }}></hr>
    </>
  );
}
