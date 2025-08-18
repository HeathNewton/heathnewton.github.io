import Icon from "./Icon";
import ProjectImage from "./ProjectImage";
import { useRef, useId, useState, useEffect } from "react";

export default function Modal({ project, page, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true);
  };
  const closeDialog = () => {
    dialogRef.current.close();
    setIsOpen(false);
  };

  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();

  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    const rect = dialog.getBoundingClientRect();

    // Check if click was outside the dialog's content box
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      dialog.close();
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dialog-open", isOpen);
  }, [isOpen]);

  return (
    <div className="screenshot-gallery__item">
      <button
        type="button"
        className="button button__modal-open"
        onClick={openDialog}
        aria-labelledby={`${id1} ${id2}`}
      >
        <ProjectImage project={project} page={page} thumbnail />
        <span id={id1}>{caption}</span>
        <span id={id2} hidden>
          (enlarge screenshot)
        </span>
      </button>
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby={id3}
      >
        <h3 id={id3} className="project-modal__caption">
          {caption}
        </h3>
        <button
          type="button"
          onClick={closeDialog}
          className="button button__icon-only button__close"
          aria-labelledby={id4}
        >
          <span id={id4} hidden>
            Close modal
          </span>
          <Icon name="xmark" />
        </button>
        <ProjectImage
          project={project}
          page={page}
          className="project-modal__image"
        />
      </dialog>
    </div>
  );
}
