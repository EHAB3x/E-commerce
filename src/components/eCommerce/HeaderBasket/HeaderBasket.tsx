import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={quantityStyle}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
