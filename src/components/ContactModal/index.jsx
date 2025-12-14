import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import classnames from "classnames";

const ContactModal = ({ toggleOpen, toggleClose, children, className }) => {
  const modalClassNames = classnames(
    className,
    "modal",
    // eslint-disable-next-line comma-dangle
    "absolute my-auto mx-6 top-0 bottom-0 right-0 left-0 bg-white rounded-lg max-w-[565px] h-[435px] bg-primary-500 pt-10 sm:mx-auto md:h-[500px] dark:bg-dark-bg-secondary dark:border dark:border-dark-border"
  );

  return (
    <div className="w-full">
      <button
        onClick={toggleClose}
        className="relative inline-flex items-center py-3 overflow-hidden text-white font-semibold bg-secondary dark:bg-dark-accent-primary px-12 rounded-md group active:bg-secondary-500 dark:active:bg-dark-accent-hover focus:outline-none focus:ring dark:focus:ring-dark-accent-primary"
        href="/download"
      >
        <span className="absolute right-0 md:transition-transform md:translate-x-full md:group-hover:-translate-x-10 hidden md:block">
          👋
        </span>

        <span className="text-sm font-medium transition-all group-hover:mr-4">
          Say hi!
        </span>
      </button>
      <Modal
        ariaHideApp={false}
        className={modalClassNames}
        overlayClassName={"modal-overlay"}
        isOpen={toggleOpen}
        onRequestClose={toggleClose}
      >
        <button
          className="absolute flex justify-end right-4 top-4 z-[150] text-white dark:text-dark-text-primary hover:dark:text-dark-accent-primary"
          onClick={toggleClose}
        >
          {" "}
          <XIcon className="w-10 h-10" />
        </button>
        <div className="w-full  dark:text-dark-text-primary">{children}</div>
      </Modal>
    </div>
  );
};

export default ContactModal;
