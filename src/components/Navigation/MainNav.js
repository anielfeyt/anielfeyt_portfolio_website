import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../images/icon.png';

import './MainNav.scss';

const isBrowser = typeof window !== "undefined";

const MainNav = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [bg, setBg] = useState(false);


    window.addEventListener('scroll', () => {
        if (isBrowser) {
            if (window.scrollY >= 200) {
                setBg(true);
            } else {
                setBg(false);
            }
        }
    });

    const menuHandler = () => {
        setToggleMenu(prevState => !prevState);
    };

    return (
        <div className="main-navigation__container" style={bg ? { backgroundColor: 'white' } : {}}>
            <div className="logo">
                <Link
                    to="intro"
                    spy={true}
                    smooth={true}
                >
                    <img width="40px" src={Logo} alt="AF" />
                </Link>
            </div>
            <nav className="main-navigation__nav">
                <ul>
                    <li>
                        <Link
                            to="about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >About</Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >Skills</Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >Projects</Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="hamburger-icon" onClick={menuHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <AnimatePresence>
                {toggleMenu && (
                    <motion.div
                        animate={{ right: 0 }} exit={{ right: "-70%" }} initial={toggleMenu}
                        className="mobile-menu__container" onClick={menuHandler}>
                        <nav className="mobile-navigation__nav">
                            <ul>
                                <li>
                                    <Link
                                        to="about"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        onClick={menuHandler}
                                    >About</Link>
                                </li>
                                <li>
                                    <Link
                                        to="skills"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        onClick={menuHandler}
                                    >Skills</Link>
                                </li>
                                <li>
                                    <Link
                                        to="projects"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        onClick={menuHandler}
                                    >Projects</Link>
                                </li>
                                <li>
                                    <Link
                                        to="contact"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        onClick={menuHandler}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MainNav;
