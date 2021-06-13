import * as React from 'react';

import './ProjectCard.scss';

const ProjectCard = ({ imgUrl, url }) => {
    return (
        <div className="project-card__container">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt="Project Preview" />
            </a>
        </div>
    );
};

export default ProjectCard;
