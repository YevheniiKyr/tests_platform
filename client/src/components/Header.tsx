import React from 'react';
import styles from '../styles/header.module.css'
import {Link} from "react-router-dom";
import {ALL_QUIZZES_ROUTE, MAIN_ROUTE, QUIZ_CREATION_ROUTE} from "../utils/constRoutes";
import logo_2 from "../images/logo_v2.png"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_and_name}>
                <Link to={MAIN_ROUTE}>
                    <img alt={"logotype"} className={styles.logo} src={logo_2}/>
                </Link>
                <Link to={MAIN_ROUTE} className={styles.link}>
                    Explore yourself
                </Link>

            </div>
            <div className={styles.navigation}>
                <Link
                    to={ALL_QUIZZES_ROUTE}
                    className={styles.link}>
                    Take quiz
                </Link>
                <Link
                    to={QUIZ_CREATION_ROUTE}
                    className={styles.link}>
                    Create quiz
                </Link>

            </div>
        </div>
    );
};

export default Header;