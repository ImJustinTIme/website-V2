import CardHeader from './util/CardHeader';
import React from 'react';
const Greeting = () => { 

    return (
        <div className={'greetParent'} >
            
            <div className={'greetText'}>
                <CardHeader headerText={'Welcome to the Site!'}/>               
                <div className={'backgroundText'}>{'I am a Full Stack Dev currently working for QCI'}</div>
            </div>
            <div className={'imageParent'}>
            <img
                className={'greetImage'}
                src='/images/coffee.jpg'
                />
            </div>
            
        </div>
    
    );
}

export default Greeting