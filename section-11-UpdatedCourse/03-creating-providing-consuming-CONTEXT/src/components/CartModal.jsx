import { createPortal } from "react-dom";
import Cart from "./Cart";
import { forwardRef, useRef, useImperativeHandle } from "react";

const CartModal = forwardRef(
  ({ cartItems, title, onUpdateCartItemQuantity, actions }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog id='modal' ref={dialog}>
        <h2>{title}</h2>
        <Cart
          items={cartItems}
          onUpdateItemQuantity={onUpdateCartItemQuantity}
        />
        <form method='dialog' id='modal-actions'>
          {actions}
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);
export default CartModal;
