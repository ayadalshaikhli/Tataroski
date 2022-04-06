import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header
      style={{ backgroundColor: "#000" }}
      className=" sticky top-0 z-20 transparent text-white"
    >
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-4xl pt-1  font-thin">Tataroski</span>
          </a>
        </Link>
        <a
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <div className="relative">
            <BsBag size="1.1rem" />
            <div
              style={{ fontSize: "10px", left: "5.5px" }}
              className="absolute top-0 text-sm"
            >
              {cartQuantity}
            </div>
          </div>
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}
