import { Fragment, useState, useEffect } from "react";
import "./App.css";
import OrderPage from "./component/OrderPage.tsx";
import OrderBucket from "./component/OrderBucket.tsx";
import MainSection from "./component/MainSection.tsx";
import Header from "./component/Header.tsx";
import ProductPage from "./component/ProductPage.tsx";

export let now = new Date();
export interface ProductList {
  image: string;
  title: string;
  discription: [];
  id: number;
  price: number;
  countPizza: number;
}

export default function App() {
  const apiUrl = "https://65f289a0034bdbecc7650c09.mockapi.io/food";
  const [activeSection, setActiveSection] = useState("main");
  const [idPzz, setIdPzz] = useState(0);
  const [product, setProduct] = useState<ProductList[]>([]);
  const [listProduct, setListProduct] = useState<ProductList[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  async function data(): Promise<any> {
    let response = await fetch(apiUrl);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    data();
  }, []);

  const removeCard = (list: ProductList) => {
    setListProduct(listProduct.filter((p) => p.price !== list.price));
    let x = 0;
    let a = listProduct
      .filter((p) => p.price !== list.price)
      .map((p) => p.price * p.countPizza);
    for (let i in a) {
      x += a[i];
    }
    setTotalPrice(x);
  };

  return (
    <Fragment>
      <Header onChange={setActiveSection} activeSection={activeSection} />

      {activeSection === "main" && (
        <div className=" mainSec">
          <MainSection
            onChange={setActiveSection}
            setListProduct={setListProduct}
            listProduct={listProduct}
            product={product}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
            setIdPzz={setIdPzz}
          />

          <OrderBucket
            remove={removeCard}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            listProduct={listProduct}
            setListProduct={setListProduct}
            onChange={setActiveSection}
          />
        </div>
      )}

      {activeSection === "ProductPage" && (
        <div className=" ProdSec">
          <ProductPage
            li={product[idPzz - 1]}
            product={product}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
            listProduct={listProduct}
            setListProduct={setListProduct}
            onChange={setActiveSection}
          />
          <OrderBucket
            remove={removeCard}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            listProduct={listProduct}
            setListProduct={setListProduct}
            onChange={setActiveSection}
          />
        </div>
      )}

      {activeSection === "OrderPage" && (
        <OrderPage
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          remove={removeCard}
          listProduct={listProduct}
        />
      )}
    </Fragment>
  );
}
