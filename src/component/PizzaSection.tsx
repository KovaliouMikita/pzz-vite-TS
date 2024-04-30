import { useState } from "react";
import Button from "./Button.js";
import SizeButton from "./SizeButton.jsx";
import Modal from "./Modal.js";
import { ProductList } from "../App";

interface PizzaSectionProps {
  li: ProductList;
  onChange: (arg0: string) => void;
  setIdPzz: (arg0: number) => void;
  setListProduct: (arg0: ProductList[]) => void;
  listProduct: ProductList[];
  product: ProductList[];
  totalPrice: number;
  setTotalPrice: (arg: number) => void;
}

interface exportDataProp {
  image: string;
  title: string;
  discription: [];
  id: number;
  price: number;
  countPizza: number;
}

export default function PizzaSection({
  li,
  onChange,
  setIdPzz,
  setListProduct,
  listProduct,
  product,
  totalPrice,
  setTotalPrice,
}: PizzaSectionProps) {
  const [modalActive, setModalActive] = useState(false);
  const [person, setPerson] = useState("1 person");
  const [pricePizza, setPricePizza] = useState(li.price * 1);

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
    <div className="Pizzasection">
      <Modal
        discription={li.discription}
        active={modalActive}
        setActive={setModalActive}
      />

      <div className="space-between">
        <img
          src={li.image}
          alt="image"
          onClick={() => {
            setIdPzz(li.id);
            onChange("ProductPage");
          }}
        />
        <Button onClick={() => setModalActive(true)}> Modal menu</Button>
      </div>
      <p style={{ display: "flex", flexDirection: "row-reverse" }}>
        {" "}
        {person}{" "}
      </p>

      <p>
        {li.title} id={li.id}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {li.discription.map((p: any) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <SizeButton
        price={li.price}
        pricePizza={pricePizza}
        setPricePizza={(current) => setPricePizza(current)}
        onChange={setPerson}
      />
      <br></br>

      <div className="space-between">
        <Button
          onClick={() => {
            const item = listProduct.find((i) => i.id === li.id);
            if (item != null) {
              item.countPizza += 1;
              setListProduct([...listProduct]);
              setTotalPrice(totalPrice + pricePizza);
            } else {
              setListProduct([...listProduct, exportData(product[li.id - 1])]);
              setTotalPrice(totalPrice + pricePizza);
            }
          }}
        >
          Add
        </Button>
        <h1> {pricePizza} $</h1>
      </div>
    </div>
  );
}
