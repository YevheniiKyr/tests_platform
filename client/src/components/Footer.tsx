import React from 'react';
import {FaGithub} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.organization}>
                <h3>
                    ©2023 Yevhenii Kyr
                </h3>
            </div>
            <div className={styles.externalLinks}>
                <a href="https://github.com/YevheniiKyr" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.footerIcon}/>
                </a>
                <a href="mailto:ye.kyrychenko@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdOutlineEmail className={styles.footerIcon}/>
                </a>
                <a href="https://www.linkedin.com/in/yevhenii-kyrychenko-a402011b8/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.footerIcon}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;