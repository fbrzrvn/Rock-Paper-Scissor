import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://faberdev.netlify.app/"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          > faber</a>
        </div>
        <button
          className="rules"
          onClick={toggleModal}
        >Rules</button>
      </footer>
      { modal ? <Modal toggleModal={toggleModal} /> : null }
    </>
  )
}

export default Footer;