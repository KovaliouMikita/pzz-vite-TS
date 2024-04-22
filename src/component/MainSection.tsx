import PizzaSection from "./PizzaSection.jsx";
import { ProductList } from "../App";
import { now } from "../App";

interface MainSectionProps {
  onChange: (arg0: string) => void;
  setIdPzz: (arg0: number) => void;
  product: ProductList[];
  setListProduct: (arg0: ProductList[]) => void;
  listProduct: ProductList[];
  totalPrice: number;
  setTotalPrice: (arg: number) => void;
}

export default function MainSection({
  onChange,
  setIdPzz,
  product,
  setListProduct,
  listProduct,
  totalPrice,
  setTotalPrice,
}: MainSectionProps) {
  return (
    <div className="menuSec">
      {product.map((li: any) => (
        <PizzaSection
          product={product}
          listProduct={listProduct}
          setListProduct={setListProduct}
          onChange={onChange}
          setIdPzz={setIdPzz}
          key={li.title + `${now}`}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          {...li}
        />
      ))}
    </div>
  );
}
