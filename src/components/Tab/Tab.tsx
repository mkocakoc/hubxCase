
import React, { useState } from 'react';
import styles from '../../App.module.css';

interface TabProps {
  icon: string;
  text: string;
  tabIndex: number;
  handleActiveTab: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ icon, text, tabIndex, handleActiveTab }) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(true); 
      // Diğer tab'leri inaktif hale getir
      document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.remove('active');
      });
      // Aktif olan tab'e active class'ını ekle
      document.getElementById(icon)?.classList.add('active');
      handleActiveTab(tabIndex);
    };
  
    return (
      <div id={text} className={`${styles.tab} ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <span className={styles.tabIcon}><img src={icon} alt={text} title={text} /></span>
        <span className="tab-text">{text}</span>
      </div>
    );
  };

export default Tab;