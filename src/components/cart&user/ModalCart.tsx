import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartState } from "../../context/Context";
import { FaRegTrashAlt } from "react-icons/fa";

const ModalCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state, dispatch } = CartState();

  const { cart } = state;

  const itemsQTD = cart.reduce((acc, curr) => acc + curr.qty, 0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.preco * curr.qty, 0));
  }, [cart]);

  const handleIncrement = (id) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty: (cart.find((item) => item.id === id)?.qty || 0) + 1,
      },
    });
  };

  const handleDecrement = (id) => {
    const itemQty = cart.find((item) => item.id === id)?.qty || 0;
    const newQty = itemQty - 1;
    if (newQty <= 0) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { id },
      });
    } else {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: { id, qty: newQty },
      });
    }
  };

  const formatarPreco = (preco) => {
    return "R$ " + preco.toFixed(2).replace(".", ",");
  };

  return (
    <>
      <Button
        variant="light"
        className="bg-white hover:bg-white w- border-none"
        onClick={handleShow}
      >
        <div className="relative">
          <i className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </i>
          {cart.length > 0 && (
            <div className="absolute top-0 left-6 w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
              {cart.length}
            </div>
          )}
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {cart.length > 0
              ? `Meu carrinho - ${itemsQTD} item(s) adicionados`
              : "Carrinho está vazio."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="flex flex-col">
            <thead>
              <tr className="flex justify-evenly w-full">
                <th>Item</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {cart.map((prod) => (
                <tr key={prod.id} className="flex justify-evenly">
                  <td className="flex justify-start w-1/3 row-auto">
                    {prod.modelo}
                  </td>
                  <td className="flex justify-center w-1/3 gap-x-2 items-center">
                    <button onClick={() => handleDecrement(prod.id)}>-</button>{" "}
                    <div>{prod.qty}</div>
                    <button onClick={() => handleIncrement(prod.id)}>
                      +
                    </button>{" "}
                  </td>
                  <td className="flex justify-start pl-6 w-1/3 row-auto">
                    {formatarPreco(prod.preco)}
                  </td>
                  <td className="pt-1 cursor-pointer">
                    <FaRegTrashAlt
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: { id: prod.id },
                        })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="mt-1 border-t-2 border-black">
              <tr className="flex mt-1 justify-evenly w-full">
                <th className="flex justify-start w-1/3">Total</th>
                <th className="flex justify-center pr-4 w-1/3">
                  {cart.reduce((acc, curr) => acc + curr.qty, 0)}
                </th>
                <th className="flex justify-start pl-[10px] w-1/3">
                  {formatarPreco(total)}
                </th>
              </tr>
            </tfoot>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Confirmar Pedido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCart;
