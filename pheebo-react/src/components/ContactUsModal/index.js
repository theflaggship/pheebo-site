import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ContactUsForm from './ContactUsForm';

function ContactUsModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='contact-us-btn' onClick={() => setShowModal(true)}>contact us</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ContactUsForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ContactUsModal;
