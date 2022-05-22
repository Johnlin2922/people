import "./ModalStyles.css";
import { useContext } from "react";
import { BoardContext } from "../../contexts/BoardContext";
import { generateShareText } from "../../utilities/Utilities";

const Modal = () => {
    const { showModal, setShowModal, person, boardState } =
        useContext(BoardContext);

    const closeModal = () => {
        setShowModal(false);
    };

    const copyShareTextToClipboard = () =>{
        navigator.clipboard.writeText(generateShareText(boardState))
    }
    return (
        showModal && (
            <div
                className="modal scale-in-center"
                onClick={() => {
                    //closeModal();
                }}
            >
                <div className="modal-content">
                    <img src={person.image}></img>
                    <div className="description">{person.description}</div>

                    <div className="share-container">
                    <button onClick={copyShareTextToClipboard}>Share</button>
                    <br></br>
                        {generateShareText(boardState)}
                    </div>

                    

                    <button onClick={() => {
                        closeModal();
                    }}>close</button>

                </div>
            </div>
        )
    );
};

export default Modal;
