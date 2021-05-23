import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <button className="rules" onClick={toggleModal}>
          Rules
        </button>
      </footer>
      {modal && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default Footer;
