import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalQuantity = Object.values(cartItems).reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
