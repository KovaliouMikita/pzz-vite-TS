import Button from "./Button.js";
import { useState } from "react";

interface SizeBottonProps {
  onChange: (arg0: string) => void;
  pricePizza?: number;
  setPricePizza: (arg0: number) => void;
  price: number;
}

export default function SizeButton({
  onChange,
  setPricePizza,
  price,
}: SizeBottonProps) {
  const [activeT, notActiveT] = useState("a");
  const [active, notActive] = useState("0");
  const [isToggled, setIsToggled] = useState(false);

  function handleClickT(type: string) {
    notActiveT(type);
  }

  function handleClick(type: string) {
    notActive(type);
    if (type === "1") onChange("1 person");
    else if (type === "2" || type === "3") onChange("1-2 persons");
    else onChange("3-4 persons");
  }

  function handleChangeBoard() {
    setIsToggled(!isToggled);
    !isToggled
      ? setPricePizza(Math.floor(price * 1.2 + price * 1.2 * 0.15))
      : setPricePizza(Math.floor(price * 1.2));
  }

  function handleChange() {
    setIsToggled(false);
  }

  return (
    <>
      <div className="testo-tolshina">
        <Button isActive={activeT === "a"} onClick={() => handleClickT("a")}>
          Tonkoe
        </Button>
        <Button isActive={activeT === "nA"} onClick={() => handleClickT("nA")}>
          American
        </Button>
      </div>

      <div className="SizeBotton">
        <Button
          isActive={active === "1"}
          onClick={() => {
            handleClick("1");
            setPricePizza(Math.floor(price * 1));
            handleChange();
          }}
        >
          25cm
        </Button>
        <Button
          isActive={active === "2"}
          onClick={() => {
            handleClick("2");
            setPricePizza(Math.floor(price * 1.2));
            handleChange();
          }}
        >
          30cm
        </Button>
        <Button
          isActive={active === "3"}
          onClick={() => {
            handleClick("3");
            setPricePizza(Math.floor(price * 1.4));
            handleChange();
          }}
        >
          32cm
        </Button>
        <Button
          isActive={active === "4"}
          onClick={() => {
            handleClick("4");
            setPricePizza(Math.floor(price * 1.6));
            handleChange();
          }}
        >
          45cm
        </Button>
        {active === "1" && (
          <Button
            isActive={isToggled === true}
            onClick={() => {
              handleChangeBoard();
            }}
          >
            chs
          </Button>
        )}
      </div>
    </>
  );
}
