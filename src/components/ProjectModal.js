import React from 'react';
import './ProjectModal.css';

function ProjectModal({title, github, description, details, onClose}) {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                <div className="project-details">
                    <p>
                        Github: <a href={github}>{github}</a>
                    </p>
                    <p>{description}</p>
                    <p>{details}</p>
                </div>
                <button className="close-button" onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default ProjectModal;
