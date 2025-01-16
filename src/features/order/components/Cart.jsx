import cart from "../../../../public/icons/shopping_cart.png";

const Cart = () => {
  return (
    <button className="p-3 bg-sec rounded-full border-2 border-prim">
      <img src={cart} alt="cart" className="w-5 h-5" />
    </button>
  );
};

export default Cart;
