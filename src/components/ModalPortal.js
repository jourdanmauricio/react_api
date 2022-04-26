import ReactDOM from "react-dom";
//import ReactDOM from "react-dom/client";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
