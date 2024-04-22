import OrderPageList from "./OrderPageList.tsx";
import { ProductList } from "../App";

interface OrderPageProps {
  listProduct: ProductList[];
  remove: any;
  totalPrice: number;
  setTotalPrice: any;
}

export default function OrderPage({
  listProduct,
  remove,
  totalPrice,
  setTotalPrice,
}: OrderPageProps) {
  return (
    <section className="Bordera ">
      <h1>OrderPage()</h1>
      <br></br>

      {listProduct.map((li: any) => (
        <OrderPageList
          li={li}
          onChange={(current: number) => setTotalPrice(totalPrice + current)}
          remove={remove}
          key={li.price}
          {...li}
        />
      ))}

      <h1 style={{ display: "flex", flexDirection: "row-reverse" }}>
        {totalPrice}
      </h1>

      <form className="Border Form ">
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" />

        <label htmlFor="email">E-mail*</label>
        <input type="text" id="email" />

        <br></br>

        <label>Telephone*</label>
        <input type="text" />
      </form>

      <h1>Delivery</h1>
      <form className="Border Form">
        <label>Address*</label>
        <input type="text" />

        <br></br>

        <label>Flat/Iffice*</label>
        <input type="mail" />

        <label>Floor*</label>
        <input type="text" />
      </form>

      <h1>Payment</h1>
      <form className="Border Form">
        <label>Card</label>
        <input type="radio" name="radio" value="yes" />

        <label>Cash</label>
        <input type="radio" name="radio" value="yes" />

        <label>Add comment</label>
        <input type="text" />

        <br></br>
        <label>I agree to receive</label>

        <label> SMS</label>
        <input type="checkbox" />

        <label>email</label>
        <input type="checkbox" />
      </form>
    </section>
  );
}
