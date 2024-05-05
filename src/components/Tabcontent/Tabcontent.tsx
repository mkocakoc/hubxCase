import { url } from 'inspector';
import styles from '../../App.module.css';

import React from 'react';

interface TabContentProps {
    backgroundImage: any;
    image: any;
    image2: any;
    image3: any;
    title: string;
    subTitle: string;
    description: string;
    tabIndex: number;
    activeTab: number;
    buttonText: string;
}

const TabContent: React.FC<TabContentProps> = ({backgroundImage, image, image2, image3, title, subTitle, description, tabIndex, activeTab, buttonText = "Learn More" }) => {
    return (
        <div className={`${tabIndex === activeTab ? styles.show : styles.hide} ${styles.tabContent}`}>
            <div className="image">
                <div className='bgImage'>
                    {backgroundImage ? <img src={backgroundImage} alt={title} title={title}  /> : null}                  
                </div>  
                <div className="icons">
                    <div className='icons__image1'><img src={image} alt={title} title={title} /> </div>
                    {image2 ? <div className='icons__image2'><img src={image2} alt={title} title={title} /></div> : null}
                    {image3 ? <div className='icons__image2'><img src={image3} alt={title} title={title} /></div> : null}
                    
                </div>
            </div>
            <div className={styles.content} >
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <p>{description}</p>
                <button className='btn'>{buttonText}</button>
            </div>
        </div>
    );
};

export default TabContent;
