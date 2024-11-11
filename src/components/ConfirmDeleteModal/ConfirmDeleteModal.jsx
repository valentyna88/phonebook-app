import Modal from 'react-modal';
import css from './ConfirmDeleteModal.module.css';

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <h2 className={css.modalTitle}>Delete Contact?</h2>
      <p className={css.modalDescription}>
        Are you sure you want to remove this contact from your list?
      </p>
      <div className={css.modalBtnWrapper}>
        <button onClick={onRequestClose}>Cancel</button>
        <button onClick={onConfirm}>Yes, Delete</button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
