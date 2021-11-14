import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={props.onClose}></div>,
        portalElement
      )}
      {createPortal(
        <div className={classes.modal}>{props.children}</div>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
