import * as React from 'react';

import archiImg from '../../images/archi.png';
import jjrtechnologiesImg from '../../images/jjrtechnologies.png';
import busniverseImg from '../../images/busniverse.png';
import caferosaImg from '../../images/caferosa.png';
import diekloofpadstalImg from '../../images/diekloofpadstal.png';
import hitechalarmsImg from '../../images/hitechalarms.png';
import lsaImg from '../../images/lsa.png';
import secunetImg from '../../images/secunet.png';
import tomerecipesImg from '../../images/tomerecipes.png';
import ProjectCard from '../ProjectCard/ProjectCard';

const PROJECTS = [
    {
        img: archiImg,
        url: "https://anielfeyt.github.io/archi/"
    },
    {
        img: jjrtechnologiesImg,
        url: "http://jjrtechnologies.co.za/"
    },
    {
        img: busniverseImg,
        url: "https://busniverse.com/"
    },
    {
        img: caferosaImg,
        url: "http://caferosa.co.za/"
    },
    {
        img: diekloofpadstalImg,
        url: "https://diekloofpadstal.co.za/"
    },
    {
        img: hitechalarmsImg,
        url: "http://hitechalarms.co.za/"
    },
    {
        img: lsaImg,
        url: "https://laerskoolashton.co.za/"
    },
    {
        img: secunetImg,
        url: "http://secunet.co.za/"
    },
    {
        img: tomerecipesImg,
        url: "https://tome-recipes.netlify.app/"
    },
];

const ProjectGrid = () => {
    return (
        <div className="projects-grid__container">
            {PROJECTS.map((p, index) => {
                return <ProjectCard key={index} url={p.url} imgUrl={p.img} />;
            })}

        </div>
    );
};

export default ProjectGrid;
