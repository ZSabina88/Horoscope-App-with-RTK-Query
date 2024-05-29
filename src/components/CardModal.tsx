import classes from "../styles/CardModal.module.scss";
import classNames from "classnames";
import { GoNorthStar } from "react-icons/go";
import { useState, useRef, useEffect } from "react";

interface ICardModal {
    isOpen?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    buttonCard?: boolean,
    dailysignCard?: boolean
}

const CardModal: React.FC<ICardModal> = ({ children, isOpen, onClose, buttonCard, dailysignCard, }) => {
    const addclasses = classNames(classes.cardWrapper, {
        [classes.buttons]: buttonCard,
        [classes.dailySigns]: dailysignCard,
    });

    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className={addclasses} >
            <div >
                <p className={classes.icon} onClick={handleCloseModal}><GoNorthStar size={28} /></p>
                {children}

            </div>


        </dialog>
    )
};

export default CardModal;
