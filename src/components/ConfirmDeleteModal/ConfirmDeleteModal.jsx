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
      <h2 className={css.title}>Confirm Deletion</h2>
      <p className={css.text}>
        Are you sure you want to permanently delete this contact? This action
        cannot be undone.
      </p>
      <div className={css.btnWrapper}>
        <button className={css.btn} onClick={onRequestClose}>
          No, keep it
        </button>
        <button className={css.btn} onClick={onConfirm}>
          Yes, delete it
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
