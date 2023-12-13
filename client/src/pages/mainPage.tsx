import React from 'react';
import styles from '../styles/mainPage.module.css'
import createQuiz from '../images/man-working.jpg'
import shareQuiz from '../images/friends_v2.png'

const MainPage = () => {

    const creationDescription = "If you have an idea for a survey or quiz, you can easily create one. Educational, psychological, humorous, all of them will be a great addition to our site."
    const shareDescription = "Have you created an interesting survey? Share it with the world. Send the test to your friends. Then discuss the results. Communication is an integral part of creating tests."

    return (
        <div>
            <div className={styles.landing}>
                <h1>
                    Welcome to the Quiz App!
                </h1>
            </div>
            <div className={styles.creation_container}>
                <div className={styles.creation}>
                    <div className={styles.creation_text}>
                        <h2 className={styles.creation_header}>Create quizzes</h2>
                        <p className={styles.creation_desc}>{creationDescription}</p>
                    </div>
                    <div className={styles.createQuizImage_container}>
                        <img className={styles.createQuizImage} src={createQuiz} alt={"working man"}/>
                    </div>
                </div>
            </div>
            <div className={styles.share_container}>
                <div className={styles.share}>
                    <div className={styles.share_text}>
                        <h2 className={styles.share_header}>Share quizzes</h2>
                        <p className={styles.share_desc}>{shareDescription}</p>
                    </div>
                    <div className={styles.shareQuizImage_container}>
                        <img className={styles.shareQuizImage} src={shareQuiz} alt={"friends"}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;