import Button from "./Button.js";
import "./modal.css";
import { Fragment } from "react";

interface ModalProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
  discription: [];
}

export default function Modal({ active, setActive, discription }: ModalProps) {
  function f(pi: any) {
    console.log(pi);
  }

  return (
    <Fragment>
      <div className={active ? "modal active" : "modal"}>
        <div className="modal__content">
          {discription.map((p: any) => (
            <div
              key={p}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p> {p}</p> <Button onClick={() => f(p)}>x / Close</Button>
            </div>
          ))}

          <div className="add card">
            <Button onClick={() => setActive(false)}>Close</Button>

            <Button onClick={() => setActive(false)}>
              add to card / Close
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
