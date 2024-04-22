import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="absolute top-0 left-6 w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
            3
          </div>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meu carrinho - 3 item(s) adicionado</Modal.Title>
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
              <tr className="flex justify-evenly">
                <td className="flex justify-start w-1/3">Raquete</td>
                <td className="flex justify-center  w-1/3">2</td>
                <td className="flex  justify-start  pl-6 w-1/3">R$ 1000,00</td>
              </tr>
              <tr className="flex justify-evenly">
                <td className="flex justify-start w-1/3">Raquete</td>
                <td className="flex justify-center  w-1/3">2</td>
                <td className="flex  justify-start  pl-6 w-1/3">R$ 1000,00</td>
              </tr>
              <tr className="flex justify-evenly">
                <td className="flex justify-start w-1/3">Raquete</td>
                <td className="flex justify-center  w-1/3">2</td>
                <td className="flex  justify-start  pl-6 w-1/3">R$ 1000,00</td>
              </tr>
              
              <tfoot  className="mt-1 border-t-2 border-black">
              <tr className="flex mt-1 justify-evenly w-full">
                <th className="flex justify-start w-1/3">Total</th>
                <th className="flex justify-center  w-1/3" >6</th>
                <th className="flex  justify-start  pl-6 w-1/3"> R$ 6000,00</th>
              </tr>
            </tfoot>
             
            </tbody>
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
}

export default ModalCart;
