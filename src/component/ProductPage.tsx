import { useState } from "react";
import Button from "./Button";
import SizeButton from "./SizeButton";
import { ProductList } from "../App";

interface ProductPageProps {
  title: string;
  discription: [];
  image: string;
  id: number;
  price: number;
  product: ProductList[];
  listProduct: ProductList[];
  setListProduct: any;
  onChange: (arg0: string) => void;
}

interface exportDataProp {
  image: string;
  title: string;
  discription: [];
  id: number;
  price: number;
  countPizza?: number;
}

export default function ProductPage({
  title,
  discription,
  image,
  id,
  price,
  product,
  listProduct,
  setListProduct,
  onChange,
}: ProductPageProps) {
  const [person, setPerson] = useState("1 person");
  const [pricePizza, setPricePizza] = useState(price);

  function exportData(obj: exportDataProp) {
    return {
      title: obj.title,
      discription: obj.discription,
      id: obj.id,
      image: obj.image,
      price: pricePizza,
      countPizza: 1,
    };
  }

  return (
    <>
      <div className="ProductPage">
        <Button onClick={() => onChange("main")}>Back </Button>

        <p className="img" style={{ height: "500px", width: "500px" }}></p>
        <img
          src={image}
          alt="image"
          style={{ height: "400px", width: "400px" }}
        />

        <div className="ProductPage a">
          <h1></h1>
          <h1> {title}</h1>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {discription.map((p: any) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h1>{person}</h1>
          <SizeButton
            price={price}
            pricePizza={pricePizza}
            setPricePizza={(current) => setPricePizza(current)}
            onChange={setPerson}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                setListProduct([...listProduct, exportData(product[id - 1])]);
              }}
            >
              add
            </Button>
            <h1>{pricePizza}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
