import styles from '../styles/Experience.module.css';
import Timeline from './util/timeline';

const Experience = () => { 
    const timelineData = [
        {
            iconName: 'icons8-book-48.png',
            headerText: 'Fall 2016 - Started College',
            bodyText: 'Started at Iowa State University with a degree in Computer Engineering'
        },
        {
            iconName: 'icons8-book-48.png',
            headerText: 'Fall 2017 - Started College',
            bodyText: 'Started at Iowa State University with a degree in Computer Engineering'
        },
        {
            iconName: 'icons8-book-48.png',
            headerText: 'Fall 2018 - Started College',
            bodyText: 'Started at Iowa State University with a degree in Computer Engineering'
        }
    ];

    return (
        <div className={styles.experienceParent}>
            <Timeline timelineData={timelineData} />
        </div>
    
    );
}

export default Experience