import { useEffect, type ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  ariaLabelledBy: string;
  actions?: ReactNode;
  closeLabel: string;
  description: string;
  details?: ReactNode;
  eyebrow?: ReactNode;
  onClose: () => void;
  title: string;
};

function Modal({
  ariaLabelledBy,
  actions,
  closeLabel,
  description,
  details,
  eyebrow,
  onClose,
  title,
}: ModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          ×
        </button>

        <div className="modal-header">
          {eyebrow && <div className="modal-eyebrow">{eyebrow}</div>}
          <h2 id={ariaLabelledBy}>{title}</h2>
        </div>

        <div className="modal-body">
          <p>{description}</p>
          {details && <div className="modal-details">{details}</div>}
        </div>

        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  );
}

export default Modal;
