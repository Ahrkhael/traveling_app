"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import modalStyles from "./SubscribeForm.module.css";

export default function SubscribeForm() {
  const t = useTranslations(`Footer.SubscribeForm`);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={modalStyles.section}>
      <h4>{t("Subscribe")}</h4>
      <form className={modalStyles.subscribeForm} onSubmit={handleSubscribe}>
        <input type="email" placeholder="example@mail.com" />
        <button type="submit" className={modalStyles.buttons}>
          {t("SubscribeBotton")}
        </button>
      </form>

      {/* Modal */}
      {isModalVisible && (
        <div className={modalStyles.modalOverlay}>
          <div className={modalStyles.modal}>
            <p>{t("ModalMessage")}</p>
            <button className={modalStyles.buttons} onClick={closeModal}>
              {t("Accept")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
