"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import modalStyles from "./SubscribeForm.module.css";

export default function SubscribeForm() {
  const t = useTranslations(`Footer.SubscribeForm`);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Regex expresion to validate emails
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const emailInput = event.target.elements.email.value;

    if (!emailRegex.test(emailInput)) {
      setModalMessage(t("ModalMessageFail"));
      setIsModalVisible(true);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await res.json();

      if (data.success) {
        setModalMessage(t("ModalMessageSuccess"));
      } else {
        setModalMessage(t("ModalMessageFail"));
      }
    } catch (error) {
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
