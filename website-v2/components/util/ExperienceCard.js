
import React from 'react';


const ExperienceCard = ({ data }) => {


    const cards = data?.map(card => {

        return (
                <div className={'card'}>
                    <div className={'headerParent'}>
                        <img
                            className={'timelineIcon'}
                            src={`/images/icons/${'iconName'}`}
                        />
                        <div className={'cardHeaderText'}>{card.headerText} </div>
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

    return (<div className={'experienceCard'}>
        <div className={'cards'} id={'cards'}>
            {
                cards
            }
        </div>
    </div>
    );
}

export default ExperienceCard