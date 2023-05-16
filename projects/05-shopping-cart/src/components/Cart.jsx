import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";

export function Cart() {
  const cartCheckboxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor="cart">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
            <div>
              <strong>Iphone</strong> - $1499
            </div>
            <footer>
              <small>
                Qty:1
              </small>
              <button></button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  )
}