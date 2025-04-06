/*import css from './ImageModal.module.css';*/

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba (0,0,0,0.75)',
  },
};

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  /* ;*/

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onRequestClose}
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '15px',
              marginRight: '15px auto ',
            }}
          >
            Close
          </button>
        </div>
        <img
          src={selectedImage?.src?.large}
          alt={selectedImage?.alt || 'Selected'}
          style={{ maxWidth: '100%' }}
        />
        <p
          style={{
            padding: '10px 20px',
          }}
        >
          {selectedImage?.alt}
        </p>
      </>
    </Modal>
  );
};

export default ImageModal;
