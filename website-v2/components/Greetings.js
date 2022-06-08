import styles from '../styles/Greeting.module.css'
import CardHeader from './util/CardHeader';
import React, {useEffect} from 'react';
const Greeting = () => { 

    return (
        <div className={styles.greetParent} >
            
            <div className={styles.greetText}>
                <CardHeader headerText={'Welcome to the Site!'}/>               
                <div className={styles.backgroundText}>{'I am a Full Stack Dev currently working for QCI'}</div>
            </div>
            <div className={styles.imageParent}>
            <img
                className={styles.greetImage}
                src='/images/coffee.jpg'
                />
            </div>
            
        </div>
    
    );
}

export default Greeting