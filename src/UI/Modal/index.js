// import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import './Modal.css'

function Modal({ children }) {
  // Nueva forma
  return createPortal(
    <div className="ModalBackground">{children}</div>,
    document.querySelector('#modal')
  );

  // Manera antigua
  // return ReactDOM.createPortal(
  //   <div className="Modal">{children}</div>,
  //   document.querySelector('#modal')
  // );
}

export { Modal };
