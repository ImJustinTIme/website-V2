import styles from '../styles/Greeting.module.css'
import CardHeader from './util/CardHeader';
import React, {useEffect} from 'react';
const Greeting = () => { 

    return (
        <div className={styles.greetParent} >
            
            <div className={styles.greetText}>
                <CardHeader iconName={'icons8-code-48.png'} headerText={'Welcome to the Site!'}/>               
                <div className={styles.backgroundText}>{'I am a Computer Engineer with a background in Software.'}</div>
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