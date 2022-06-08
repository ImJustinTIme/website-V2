
import React, { useState } from 'react';
import styles from '../../styles/Util.module.css'

const Timeline = ({ timelineData }) => {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const goToNextItem = () => {

        const anchor = document.querySelector(`#cards`);
        anchor.scrollLeft += 200;
    }

    const goToPrevItem = () => {

        const anchor = document.querySelector(`#cards`);
        console.log(anchor);
        anchor.scrollLeft -= 200;
    }

    return (
        <div className={styles.timeline}>
            <a className={styles.arrowButton} onClick={goToPrevItem} >
                <img
                    className={styles.arrowIcon}
                    src={`/images/icons/icons8-back-48.png`}
                />
            </a>
            <div className={styles.timelineCards} id={'cards'}>
                {
                    timelineData?.map((piece, i) => {

                        return (
                            <div key={`event-${i}`} id={`event-${i}`} className={styles.cardParent}>
                                <div className={styles.timelineCard}>
                                    <div className={styles.headerParent}>
                                        <img
                                            className={styles.timelineIcon}
                                            src={`/images/icons/${piece.iconName}`}
                                        />
                                        <div className={styles.cardHeaderText}>{piece.headerText} </div>
                                    </div>
                                    <div className={styles.cardBody}>{piece.bodyText} </div>
                                </div>
                                {/* <div className={styles.lineGroup}>
                                    {i != timelineData.length - 1 ? (
                                        <>
                                            <div className={styles.dot} />
                                            <div className={styles.line} />
                                        </>)
                                        :
                                        (<>
                                            <div className={styles.dot} />
                                        </>
                                        )}
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
            <a className={styles.arrowButton} onClick={goToNextItem}>
                <img
                    className={styles.arrowIcon}
                    src={`/images/icons/icons8-forward-48.png`}
                />
            </a>
        </div>
    )
}

export default Timeline