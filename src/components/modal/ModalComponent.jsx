import "./ModalStyles.css";
import { useContext } from "react";
import { BoardContext } from "../../contexts/BoardContext";

const Modal = () => {
    const { showModal, setShowModal, person } = useContext(BoardContext);

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        showModal && (
            <div
                className="modal scale-in-center"
                onClick={() => {
                    closeModal();
                }}
            >
                <div className="modal-content">
                    <img src={person.image}></img>
                    <div className="description">{person.description}</div>
                </div>
            </div>
        )
    );
};
export default Modal;
