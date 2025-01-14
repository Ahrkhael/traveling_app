"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import modalStyles from "./SubscribeForm.module.css";

export default function SubscribeForm() {
  const t = useTranslations(`Footer.SubscribeForm`);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Expresión regular para validar el email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  const handleSubscribe = (event) => {
    event.preventDefault();
    const emailInput = event.target.elements.email.value;

    if (emailRegex.test(emailInput)) {
      setModalMessage(t("ModalMessageSuccess"));
    } else {
      setModalMessage(t("ModalMessageFail"));
    }

    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={modalStyles.section}>
      <h4>{t("Subscribe")}</h4>
      <form
        className={modalStyles.subscribeForm}
        onSubmit={handleSubscribe}
        noValidate
      >
        <input type="email" name="email" placeholder="example@mail.com" />
        <button type="submit" className={modalStyles.buttons}>
          {t("SubscribeBotton")}
        </button>
      </form>

      {/* Modal */}
      {isModalVisible && (
        <div className={modalStyles.modalOverlay}>
          <div className={modalStyles.modal}>
            <p>{modalMessage}</p>
            <button className={modalStyles.buttons} onClick={closeModal}>
              {t("Accept")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
