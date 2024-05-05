
import React, { useState } from 'react';
import styles from '../../App.module.css';

interface TabProps {
  icon: string;
  text: string;
  tabIndex: number;
  activeTab: number;
  handleActiveTab: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ icon, text, tabIndex, activeTab, handleActiveTab }) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(true); 
     
      document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.remove('active');        
      });
      
      document.getElementById(icon)?.classList.add('active');
      const activeTab = document.querySelector('.tab.active');
      activeTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest',inline: 'start' });
      handleActiveTab(tabIndex);      
    };
  
    return (
      <div id={text} className={`${styles.tab} ${tabIndex === activeTab ? "active" : ""}`} onClick={handleClick}>
        <span className={styles.tabIcon}><img src={icon} alt={text} title={text} /></span>
        <span className={styles.tabText}>{text}</span>
      </div>
    );
  };

export default Tab;