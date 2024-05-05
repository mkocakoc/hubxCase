import styles from '../../App.module.css';
import React from 'react';

interface TabContentProps {
    frameID: string;
    backgroundImage: any;
    image: any;
    image2: any;
    image3: any;
    image4: any;
    title: string;
    subTitle: string;
    description: string;
    tabIndex: number;
    activeTab: number;
    buttonText: string;
}

const TabContent: React.FC<TabContentProps> = ({ frameID,backgroundImage, image, image2, image3,image4, title, subTitle, description, tabIndex, activeTab, buttonText = "Learn More" }) => {
    return (
        <div className={` ${`${styles.tabContent} ${styles[frameID]}  `}${tabIndex === activeTab ? styles.show : styles.hide}` } >
            <div className={styles.imageContainer}>
                {backgroundImage ? <div className={styles.bgImage}>
                    <img src={backgroundImage} alt={title} title={title} />
                </div> : null}
                <div className={styles.icons}>
                    <div className={styles.icons__image1}><img src={image} alt={title} title={title} /> </div>
                    {image2 ? <div className={styles.icons__image2}><img src={image2} alt={title} title={title} /></div> : null}
                    {image3 ? <div className={styles.icons__image3}><img src={image3} alt={title} title={title} /></div> : null}
                    {image4 ? <div className={styles.icons__image4}><img src={image4} alt={title} title={title} /></div> : null}

                </div>
            </div>
            <div className={styles.content} >
                <h3>{subTitle}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className={styles.primary}>{buttonText}</button>
            </div>
        </div>
    );
};

export default TabContent;
