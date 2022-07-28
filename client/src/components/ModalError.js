import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorMsg } from "../store/actions/index.js";

export const ModalError = () => {
  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.errorMsg);

  const modalRef = useRef();

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new bootstrap.Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  if (errorMsg.length > 0) {
    showModal();
  }

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    dispatch(resetErrorMsg());
    bsModal.hide();
  };

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Error
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{errorMsg}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={hideModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
