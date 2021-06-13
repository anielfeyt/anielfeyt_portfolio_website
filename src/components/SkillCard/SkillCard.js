import * as React from 'react';

import './SkillCard.scss';

const SkillCard = ({ skill, value, valueText, overAYear }) => {

    return (
        <div style={overAYear ? { backgroundColor: "#6e1ff8" } : {}} className={`skill-card__container`} >
            <div className="skill-card__header">
                {skill}
            </div>
            <div className="skill-card__xp">
                {`${value} ${valueText}`}
            </div>
        </div>
    );
};

export default SkillCard;
