
import React from 'react';
import styles from '../../styles/Util.module.css';

const ExperienceCard = ({ data }) => {


    const cards = data?.map(card => {

        return (
                <div className={styles.card}>
                    <div className={styles.headerParent}>
                        <img
                            className={styles.timelineIcon}
                            src={`/images/icons/${card.iconName}`}
                        />
                        <div className={styles.cardHeaderText}>{card.headerText} </div>
                    </div>
                    <ul>
                    {
                        card.points.map(bullet => {

                            return (
                                <li>{bullet}</li>
                            )
                        })
                    }
                    </ul>
                </div>
        )
    });

    return (<div className={styles.experienceCard}>
        <div className={styles.cards} id={'cards'}>
            {
                cards
            }
        </div>
    </div>
    );
}

export default ExperienceCard